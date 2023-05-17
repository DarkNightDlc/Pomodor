import { HistoyItem } from './components/HistoryItem'
import '../../styles/HistoryStyle.scss'
import { CycleContext } from '../../context/CyclesContext'
import { useContext } from 'react'

export default function History(){

    const { cycles } = useContext(CycleContext)

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
                            {cycles.map(
                                cycle => <HistoyItem 
                                        key={cycle.id} 
                                        Time={cycle.Timer} 
                                        TDate={cycle.startDate} 
                                        Task={cycle.Name}
                                        Status={cycle}
                                    />
                            )}
                        </tbody>    
                    </table>

                </div>
            </div>
        </main>
    )
}