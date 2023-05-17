import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import '../../../styles/HistoryStyle.scss'


interface HistoryItemProps {
    Task: string;
    Time: number;
    TDate: Date;
    Status : {
        interruptedDate?: Date;
        finishedDate?: Date;
    }
    // "complete" | "stopped" | "progress";
}

    const colorr = 'red.900' 
export function HistoyItem({Task, Time, TDate, Status}:HistoryItemProps){

    var statusFinished : {Text: string; Color: string}
   
    statusFinished={ 
        Text:"Em andamento",
        Color:"beforeOrange"
    } 

    {Status.interruptedDate && (
        statusFinished={ 
            Color:"beforeRed",
            Text:"Interrompido",
        }
    )}

    {Status.finishedDate && (
        statusFinished = { 
            Text:"Concluído",
            Color:"beforeGreen"
        }
    )}

    // {!Status.interruptedDate && !Status.finishedDate &&(
           
    // )}


    return(
        <tr>
            <td>{Task}</td>
            <td>{Time} minutos</td>
            <td>Há cerca de {formatDistanceToNow(TDate, {
                addSuffix: true,
                locale : ptBR
            })}</td>
            <td 
                className={` flex items-center gap-2 before:block before:w-2 before:h-2 before:rounded-full ${statusFinished.Color} `}
            >{statusFinished.Text}</td>
        </tr>
        )
}