interface NumberOfTimerProps{
    timeCount: string
}

export function NumberOfTimer({timeCount}:NumberOfTimerProps){
    return(
        <div 
            className="w-[8rem] h-[12.375rem] bg-gray-divider flex justify-center items-center rounded-lg robot"
        >
        {timeCount}
        </div>
    )
}