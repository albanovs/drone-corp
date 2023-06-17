import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="lg:flex hidden justify-between text-white items-center lg:pl-20 lg:pr-20 w-full h-[90px] text-sm">
        <div className="text-white">LOGO</div>
        <nav className="w-[500px] flex justify-between">
          <NavLink to="/" className="hover:text-[#FE390C] transition-all">
            главная
          </NavLink>
          <NavLink
            to="/service"
            className="hover:text-[#FE390C] transition-all"
          >
            услуги
          </NavLink>
          <NavLink className="hover:text-[#FE390C] transition-all">
            о нас
          </NavLink>
          <NavLink className="hover:text-[#FE390C] transition-all">
            контакты
          </NavLink>
        </nav>
        <div className="flex items-center text-sm">
          <div className="ml-3 border border-[#FE390C] p-2 rounded-sm cursor-pointer hover:bg-[#FE390C] transition-all hover:text-white text-[#FE390C]">
            Связаться с нами
          </div>
        </div>
      </header>
    </div>
  );
}
