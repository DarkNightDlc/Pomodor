import { HandPalm, Play} from "phosphor-react";
import { useContext} from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { CycleContext } from "../../context/CyclesContext";
import {Countdown} from "./components/Countdown";
import {NewCycleForm }from "./components/NewCycleForm";

type InputsProps = {
    projectName: string;
    timer: number
}

export default function Home(){

    const {activeCycles, StopCycle, handleCreateNewCycle } = useContext(CycleContext);

    const newCycleForm = useForm<InputsProps>({
        defaultValues:{
            projectName: "",
            timer: 0
        }
    });

    const { handleSubmit, watch, reset} = newCycleForm

    const stateTask = watch('projectName')
    const stateTimer = watch('timer')
    const isSubmitDisable = !stateTask || !stateTimer

    

    const handleStopnNewCycle = () => {
        StopCycle()
        reset()
    
    }
    
    return( 
        <main className="h-full">
            <form 
                onSubmit={handleSubmit(activeCycles ? handleStopnNewCycle : handleCreateNewCycle)} 
                className="flex flex-col items-center h-full justify-center gap-14">

                    <FormProvider {...newCycleForm}>
                        <NewCycleForm/>
                    </FormProvider>

                    <Countdown/>

               {
                    activeCycles ?
                    (
                        <button
                            className={`${isSubmitDisable&&"disabled"} text-base font-bold flex justify-center gap-2 rounded-lg py-[1.0625rem] w-full max-w-[40.5rem] bg-red-default [&:not(.disabled)]:hover:bg-red-800`}
                        >
                            <HandPalm size={24}/> 
                        Interromper
                        </button>
                    )
                    :
                    (
                        <button
                            disabled={isSubmitDisable}
                            className={`${isSubmitDisable&&"disabled"} text-base font-bold flex justify-center gap-2 rounded-lg py-[1.0625rem] w-full max-w-[40.5rem] bg-green-default [&:not(.disabled)]:hover:bg-green-dark`}
                        >
                            <Play size={24}/> 
                        Começar
                        </button>
                    )
               }
            </form>
        </main>
    )
}