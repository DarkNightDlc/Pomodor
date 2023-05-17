import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout(){
    return(
        <div className={`p-10 max-w-[74rem] h-[calc(100vh-10rem)] mx-auto my-20 bg-gray-elements rounded-lg flex flex-col items-center`}>
            <Header/>
            <Outlet />
        </div>
    )
}