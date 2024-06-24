import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/LogoKYM.webp";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Spanish from "@/assets/icons/spanish";
import English from "@/assets/icons/English";
import { navbarLinks } from "@/constants";
function Navbar() {
  const { pathname } = useLocation();
  const [language, setLanguage] = useState("es");
  const { i18n, t } = useTranslation();

  function onChangeLanguage() {
    setLanguage((language) => {
      return language === "es" ? "en" : "es";
    });
  }

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <nav className="bg-azul text-white flex w-full h-[10%] ">
      <div className="">
        <img className="h-full" src={logo} alt="logo" />
      </div>
      <div className="flex flex-1 items-center p-4 justify-end">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="group ml-auto lg:hidden bg-azul hover:border-amarillo hover:bg-azul/45"
            >
              <Menu className="h-6 w-6 text-white group-hover:text-amarillo" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px]">
            <ul className="flex flex-col justify-end w-full gap-4 py-6">
              {navbarLinks.map((link) => {
                const isActive = pathname === link.route;
                return (
                  <li key={link.label}>
                    <NavLink
                      to={link.route}
                      key={link.route}
                      className={` text-lg hover:border-b hover:border-amarillo  hover:text-amarillo   ${
                        isActive
                          ? "text-amarillo font-bold border-b border-amarillo"
                          : " "
                      }`}
                    >
                      {t(`navLinks.${link.label.toLowerCase()}`)}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden p-4 lg:flex flex-1 items-center lg:gap-4">
        <ul className="flex justify-end w-full gap-8">
          {navbarLinks.map((link) => {
            const isActive = pathname === link.route;
            return (
              <li key={link.label}>
                <NavLink
                  to={link.route}
                  key={link.route}
                  className={` text-lg hover:border-b hover:border-amarillo  hover:text-amarillo  ${
                    isActive
                      ? "text-amarillo font-bold border-b border-amarillo"
                      : " "
                  }`}
                >
                  {t(`navLinks.${link.label.toLowerCase()}`)}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center p-4 pl-0">
        <Button
          variant="ghost"
          size="icon"
          className={`group ml-auto  bg-azul hover:border-amarillo hover:bg-azul/45`}
          onClick={onChangeLanguage}
        >
          {language === "es" ? (
            <Spanish className="hover:text-amarillo transition-all" />
          ) : (
            <English className="hover:text-amarillo transition-all" />
          )}
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
