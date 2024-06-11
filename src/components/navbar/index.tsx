import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/LogoKYM.png";
import { navbarLinks } from "@/constants";
function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="bg-azul text-white flex w-full h-[80px]">
      <div className="h-full">
        <img className="h-[80px]" src={logo} />
      </div>
      <div className="p-10 flex flex-1 items-center">
        <ul className="flex justify-end w-full gap-8">
          {navbarLinks.map((link) => {
            const isActive = pathname === link.route;
            return (
              <li>
                <NavLink
                  to={link.route}
                  key={link.route}
                  className={`hover:text-amarillo ${
                    isActive && "text-amarillo font-semibold"
                  }`}
                >
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
