import { differenceInSeconds } from "date-fns";
import { useContext, useEffect} from "react";
import { CycleContext } from "../../../../context/CyclesContext";
import { NumberOfTimer } from "./components/NumberOfTimer";

export function Countdown(){

    const {activeCycles, activeCyclesId, amountSecondsPassed, setAmountSecondsPassed, dispatch  } = useContext(CycleContext);
    
    const totalSeconds = activeCycles ? activeCycles.Timer * 60 : 0
    const currentSeconds = activeCycles ? totalSeconds - amountSecondsPassed : 0 

    useEffect(()=>{

        let interval : number

        

        if(activeCycles){            
            interval = setInterval(() =>{
                const secondsDifference = differenceInSeconds(new Date(), activeCycles.startDate)
            
                if(secondsDifference >= totalSeconds) {
                    dispatch({
                        type:"END_CURRENT_CYCLE",
                        payload:{
                            activeCyclesId,
                        }
                    })
                    

                }else{
                    setAmountSecondsPassed(secondsDifference)
    
                }
            }, 1000)
        }
        
        return ()=>{
            clearInterval(interval)
        }

    }, [activeCycles, totalSeconds, activeCyclesId] )

    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')
    console.log(minutes+seconds)

    useEffect(()=>{
        activeCycles ? document.title = `${minutes}:${seconds}`
        :
        document.title = "Pomodoro"


    }, [minutes, seconds, activeCycles])
    
    return(
        <div className="flex justify-between gap-4 flex-wrap">
            <NumberOfTimer timeCount={minutes[0]}/>
            <NumberOfTimer timeCount={minutes[1]}/>
            <div 
                className="w-[6rem] h-[12.375rem] flex justify-center items-center rounded-lg robot text-green-default"
            >:</div>
            <NumberOfTimer timeCount={seconds[0]}/>
            <NumberOfTimer timeCount={seconds[1]}/>
        </div>
    )
}