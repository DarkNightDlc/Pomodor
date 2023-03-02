import { Play, Timer } from "phosphor-react";
import { useEffect, useState } from "react";
import { NumberOfTimer } from "../components/NumberOfTimer";
import { useForm, SubmitHandler } from "react-hook-form";
import { differenceInSeconds } from "date-fns";

type InputsProps = {
    projectName: string;
    timer: number
}

interface CycleProps {
    id: string,
    Name: string,
    Timer: number,
    startDate: Date
}

export default function Home(){

    const {register, handleSubmit, watch} = useForm<InputsProps>({
        defaultValues:{
            projectName: "",
            timer: 0
        }
    });

    const stateTask = watch('projectName')
    const stateTimer = watch('timer')
    const isSubmitDisable = !stateTask || !stateTimer

    const [cycles, setCycles] = useState<CycleProps[]>([]);
    const [activeCyclesId, setActiveCyclesId] = useState<string | null >(null);
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const activeCycles = cycles.find( cycles => cycles.id === activeCyclesId)

    const totalSeconds = activeCycles ? activeCycles.Timer * 60 : 0
    const currentSeconds = activeCycles ? totalSeconds - amountSecondsPassed : 0 

    useEffect(()=>{

        let interval : number

        if(activeCycles){      
                                           
            interval = setInterval(
                ()=> setAmountSecondsPassed(
                    differenceInSeconds(new Date(), activeCycles!.startDate)
                ), 1000
            )

        }        
        
        return ()=>{
            clearInterval()
        }
        
    }, [activeCycles] )

    
    
    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padEnd(2, '0')

    useEffect(()=>{
        if(activeCycles) document.title = `${minutes}:${seconds}`
    }, [minutes, seconds, activeCycles])

    const handleCreateNewCycle: SubmitHandler<InputsProps> = data => {
        const id = String(new Date().getTime())

        const newCycle = {
            id,
            Name: data.projectName,
            Timer: data.timer,
            startDate: new Date()
        }

        setAmountSecondsPassed(0)
        setCycles( state =>[...state, newCycle])
        setActiveCyclesId(id)
    }

    return( 
        <main className="h-full">
            <form onSubmit={handleSubmit(handleCreateNewCycle)} className="flex flex-col items-center h-full justify-center gap-14">
                <div className="font-bold text-lg flex flex-wrap justify-center gap-2">
                    <label htmlFor="projectName" >Vou Trabalhar em</label>

                    <input
                        type="text"
                        id="projectName" 
                        className="border-b-[3px] bg-transparent border-gray-placeholder text-center w-[17rem] removeArrow" 
                        placeholder="Dê um nome para seu projeto"
                        list="projectName-suggestions"
                        {...register('projectName' ) }
                    />
                    
                    <datalist id="projectName-suggestions">
                        <option value="Projeto 1"/>
                        <option value="Projeto 2"/>
                        <option value="Projeto 3"/>
                        <option value="Projeto 4"/>
                        <option value="Projeto Abacaxi"/>
                        <option value="Projeto Banana"/>
                    </datalist>

                    <label htmlFor="timer">
                        Durante
                    </label>

                    <input 
                        type="number"
                        id="timer"
                        className="border-b-[3px] bg-transparent border-gray-placeholder w-[4.5rem] text-center"
                        placeholder="- 00 +"
                        max={60}
                        min={5}
                        step={5}
                        {...register('timer',{ valueAsNumber: true})}
                    />

                    <label htmlFor="timer">
                        minutos
                    </label>
                </div>

                <div className="flex justify-between gap-4 flex-wrap">
                    <NumberOfTimer timeCount={minutes[0]}/>
                    <NumberOfTimer timeCount={minutes[1]}/>
                    <div 
                        className="w-[6rem] h-[12.375rem] flex justify-center items-center rounded-lg robot text-green-default"
                    >:</div>
                    <NumberOfTimer timeCount={seconds[0]}/>
                    <NumberOfTimer timeCount={seconds[1]}/>
                </div>

               {
                    
                    <button
                        disabled={isSubmitDisable}
                        className={`${isSubmitDisable&&"disabled"} text-base font-bold flex justify-center gap-2 rounded-lg py-[1.0625rem] w-full max-w-[40.5rem] bg-green-default [&:not(.disabled)]:hover:bg-green-dark`}>
                        <Play size={24}/> Começar
                    </button>
               }
            </form>
        </main>
    )
}