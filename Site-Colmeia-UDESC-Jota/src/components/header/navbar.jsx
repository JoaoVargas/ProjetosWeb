import {NavLink} from "react-router-dom";
import logo from "../../../images/logo.png"
// eslint-disable-next-line react/prop-types
const NavbarItem = ({path, name}) => {
  return(
    <p className="text-lg no-underline text-[#050038] hover:text-zinc ml-2">
      <NavLink to={path}>{name}</NavLink>
    </p>
  );
}

export default function Navbar() {
  return (
    <>
    <header>
      <nav className="bg-[#F5F5F5] font-lato flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 sm:items-baseline w-full absolute">
        <div className="mb-2 sm:mb-0">
          <NavLink to='/'><a href=""><img src={logo} alt="logo" className="w-10 h-10"/></a></NavLink>
        </div>
        <div className="flex">
          <NavbarItem path='/projetos' name='projetos'/>
          <NavbarItem path='/sobrenos' name='sobre nós'/>
          <NavbarItem path='/contato' name='contato'/>
        </div>
      </nav>
    </header>
    </>
  );
}
