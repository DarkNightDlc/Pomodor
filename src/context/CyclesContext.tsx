import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { SubmitHandler } from "react-hook-form";

type InputsProps = {
    projectName: string;
    timer: number
}

interface CycleProps {
    id: string,
    Name: string,
    Timer: number,
    startDate: Date,
    interruptedDate?: Date,
    finishedDate?: Date
}

// interface ActionProps{
    // type:string;
    // payload:{
        // activeCyclesId?: string;
        // newCycle?: {}
// 
    // }
// }

interface CycleContexTypes {
    activeCycles: CycleProps | undefined;
    activeCyclesId : string | null;
    amountSecondsPassed : number;
    cycles: CycleProps[];
    dispatch : React.Dispatch<any>;
    setActiveCyclesId : React.Dispatch<React.SetStateAction<string | null>>;
    setAmountSecondsPassed: React.Dispatch<React.SetStateAction<number>>;
    handleCreateNewCycle: (data : InputsProps ) => void;
    StopCycle: ()=> void;
}    

interface CyclesState {
    cycles: CycleProps[];
    activeCyclesId: string | null
}

export const CycleContext = createContext({} as CycleContexTypes)

interface CycleContextProviderProps {
    children: ReactNode;
}

export function CycleContextProvider({ children }:CycleContextProviderProps){

    const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

    const [cyclesState, dispatch] = useReducer((state : CyclesState, action: any)=>{
        switch(action.type){
            case "ADD_NEW_CYCLE":
                return {
                    ...state,
                    cycles : [...state.cycles, action.payload.newCycle],
                    activeCyclesId: action.payload.newCycle.id
                }

            case "STOP_CURRENT_CYCLE":
                return {
                    ...state,
                    cycles : state.cycles.map(cycle => cycle.id === action.payload.activeCyclesId ? {...cycle, interruptedDate :  new Date() } : cycle ),
                    activeCyclesId: null
                } 

            case "END_CURRENT_CYCLE":
                return {
                    ...state,
                    cycles : state.cycles.map(cycle => cycle.id === action.payload.activeCyclesId ? {...cycle, finishedDate :  new Date() } : cycle ),
                    activeCyclesId: null
                } 

            default:
                alert("Ação Desconhecida")
        }

    }, {
        cycles: [],
        activeCyclesId: null
    })

    const {activeCyclesId , cycles} = cyclesState

    const activeCycles = cycles.find( cycles => cycles.id === activeCyclesId)
    
    const handleCreateNewCycle: SubmitHandler<InputsProps> = data => {
        
        const id = String(new Date().getTime())

        const newCycle = {
            id,
            Name: data.projectName,
            Timer: data.timer,
            startDate: new Date(),
        }
        dispatch({
            type: `ADD_NEW_CYCLE`,
            payload:{
                newCycle,
            }
        })
        setAmountSecondsPassed(0)
    }

    const StopCycle = () => {
        // setCycles(state => state.map(cycle => cycle.id === activeCyclesId ? {...cycle, interruptedDate :  new Date() } : cycle ))
        dispatch({
            type: `STOP_CURRENT_CYCLE`,
            payload:{
                activeCyclesId,
            }
        })
    
    }

    return (
        <CycleContext.Provider value={{activeCycles, activeCyclesId, amountSecondsPassed, cycles, dispatch, StopCycle, setAmountSecondsPassed, handleCreateNewCycle }}>
            {children}
        </CycleContext.Provider>
    )
}