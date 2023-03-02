import '../styles/HistoryStyle.scss'

interface HistoryItemProps {
    Task: string;
    Time: number;
    TDate: string;
    Status : "complete" | "stopped" | "progress";
}

    const colorr = 'red.900' 
export function HistoyItem({Task, Time, TDate, Status}:HistoryItemProps){

    const complete = {Name:"Interrompido", color: "beforeRed"}
    const stopped = ["Concluído","beforeGreen"]
    const progress = ["Em Andamento", "beforeOrange"]

    var statusFinished = { 
        Text:"Concluído",
        Color:"beforeGreen"
    }

    switch (Status){
        case "stopped":
            statusFinished={ 
                Color:"beforeRed",
                Text:"Interrompido",
            }
            break;
        case "progress":
            statusFinished={ 
                Text:"Em andamento",
                Color:"beforeOrange"
            }
        break;
    }

    const DateOfNow = new Date();
    const DataBruta = new Date(TDate);
    const DifferenceYear =  DateOfNow.getFullYear() -DataBruta.getFullYear()
    const DifferenceYearMonth = DateOfNow.getMonth() -DataBruta.getMonth()        
    const DifferenceYearDay = DateOfNow.getDay() -DataBruta.getDay()          
    
    const RefinedDate = DifferenceYear > 1 ? DifferenceYear + " Anos" 
    : DifferenceYear === 1 ? DifferenceYear + " Ano" 
    : DifferenceYearMonth > 1 ? DifferenceYearMonth + " Meses" 
    : DifferenceYearMonth === 1 ? DifferenceYearMonth + " Mes"
    : DifferenceYearDay > 1 ? DifferenceYearDay + " Dias"
    : DifferenceYearDay + " Dia"


    return(
        <tr>
            <td>{Task}</td>
            <td>{Time} minutos</td>
            <td>Há cerca de {RefinedDate}</td>
            <td 
                className={` flex items-center gap-2 before:block before:w-2 before:h-2 before:rounded-full ${statusFinished.Color} `}
            >{statusFinished.Text}</td>
        </tr>
        )
}