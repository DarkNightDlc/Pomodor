import { Scroll, Timer} from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header(){
    return(
        <header className="w-full flex justify-between items-center">
            <a href="/" className="w-10 h-10">
                <img src="/LogoIgnite.svg" alt="" className="h-full w-full"/>
            </a>

            <nav className="flex gap-2 text-white">
                <NavLink to="/" title="Timer" className="h-12 w-12 flex items-center justify-center border-y-[3px] border-transparent hover:border-b-green-dark">
                    <Timer size={26} />
                </NavLink>
                <NavLink to="/History" title="Historico" className="h-12 w-12 flex items-center justify-center border-y-[3px] border-transparent hover:border-b-green-dark">
                    <Scroll  size={26} />
                </NavLink>
            </nav>
        </header>
    )
}