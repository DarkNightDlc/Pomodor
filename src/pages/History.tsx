import { HistoyItem } from '../components/HistoryItem'
import '../styles/HistoryStyle.scss'

export default function History(){
    return( 
        <main className="w-full h-full pb-[4.5rem]">
            <div className="max-w-[58.1875rem] h-full mx-auto mt-[3.125rem] flex flex-col gap-9 ">
                <h1 className="text-2xl font-bold">Meu Histórico</h1>
                <div className="w-full h-full max-h-[28.8125rem] overflow-auto ">
                    <table className="w-full text-sm border-collapse min-w-[37.5rem] HistoryTable ">
                        <thead>
                            <tr > 
                                <th className="w-[348px]">Tarefa</th>
                                <th className="">Duração</th>
                                <th className="">Início</th>
                                <th className="">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <HistoyItem key={"20 December 2019 14:48"} Status='complete' Time={59} TDate="20 December 2019 14:48" Task='JJDA' />
                            <HistoyItem key={"20 December 2019 14:48"} Status='progress' Time={59} TDate="20 December 2019 14:48" Task='JJDA' />
                            <HistoyItem key={"20 December 2019 14:48"} Status='complete' Time={59} TDate="20 December 2019 14:48" Task='JJDA' />
                            <HistoyItem key={"20 December 2019 14:48"} Status='stopped' Time={59} TDate="20 December 2019 14:48" Task='JJDA' />
                            <HistoyItem key={"20 December 2019 14:48"} Status='stopped' Time={59} TDate="20 December 2018 14:48" Task='JJDA' />
                        </tbody>    
                    </table>

                </div>
            </div>
        </main>
    )
}