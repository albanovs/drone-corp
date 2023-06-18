import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BiChat } from "react-icons/bi";

export default function Header() {
  const [burger, setBurger] = useState(false);

  const handleBurgerClick = () => {
    setBurger(!burger);
  };
  return (
    <div>
      <div className="text-white lg:hidden fixed p-1 rounded-sm right-5 top-5 z-20">
        {burger ? (
          <AiOutlineClose
            onClick={handleBurgerClick}
            className="text-[#FE390C]"
            size={25}
          />
        ) : (
          <GiHamburgerMenu
            onClick={handleBurgerClick}
            className="text-[#FE390C]"
            size={25}
          />
        )}
      </div>
      <a>
        <BiChat className="fixed bottom-5 left-5 text-[#FE390C]" size={30} />
      </a>
      <header
        className={
          burger
            ? "transition-all z-10 flex flex-col justify-around items-center bg-black/95 fixed right-0 w-[270px] h-screen"
            : "lg:flex hidden justify-between text-white items-center lg:pl-20 lg:pr-20 w-full h-[90px] text-sm"
        }
      >
        <div className={burger ? "fixed top-5 left-[140px]" : "text-white"}>
          LOGO
        </div>
        <nav
          className={
            burger ? "flex flex-col text-xl" : "w-[500px] flex justify-between"
          }
        >
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
