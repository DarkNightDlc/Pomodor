import { useContext } from "react"
import { useFormContext } from "react-hook-form"
import { CycleContext } from "../../../../context/CyclesContext"


export function NewCycleForm(){
    const{activeCycles} = useContext(CycleContext)
    const {register} = useFormContext()
    
    return(
        <div className="font-bold text-lg flex flex-wrap justify-center gap-2">
                    <label htmlFor="projectName" >Vou Trabalhar em</label>

                    <input
                        type="text"
                        id="projectName" 
                        className="border-b-[3px] bg-transparent border-gray-placeholder text-center w-[17rem] removeArrow" 
                        placeholder="Dê um nome para seu projeto"
                        list="projectName-suggestions"
                        {...register('projectName' ) }
                        disabled={!!activeCycles}

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
                        min={1}
                        step={5}
                        {...register('timer',{ valueAsNumber: true})}
                        disabled={!!activeCycles}
                    />

                    <label htmlFor="timer">
                        minutos
                    </label>
                </div>

    )
}