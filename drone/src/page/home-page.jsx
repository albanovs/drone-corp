import React from "react";
import { NavLink } from "react-router-dom";
import drone from '../img/home/drone2.png'

export const HomePage = () => {
    return (
        <div className="mx-auto">
            <div className="bg-site w-full h-screen bg-cover text-white">
                <header className="flex justify-between items-center pl-20 pr-20 w-full h-[90px]">
                    <div className="text-white">LOGO</div>
                    <nav className="w-[500px] flex justify-between">
                        <NavLink className="hover:text-[#FE390C] transition-all">главная</NavLink>
                        <NavLink className="hover:text-[#FE390C] transition-all">главная</NavLink>
                        <NavLink className="hover:text-[#FE390C] transition-all">главная</NavLink>
                        <NavLink className="hover:text-[#FE390C] transition-all">главная</NavLink>
                    </nav>
                    <div className="flex items-center">
                        <a href="" className="hover:text-[#FE390C] transition-all">+996(900)500-500</a>
                        <div className="ml-3 border border-[#FE390C] p-2 rounded-sm cursor-pointer hover:bg-[#FE390C] transition-all hover:text-white text-[#FE390C]">Связаться с нами</div>
                    </div>
                </header>
                <section className="w-full pl-20 pr-20">
                    <div>
                        <div className="flex items-center justify-center">
                            <div>
                                <h1>RUSROBODRON</h1>
                                <h1>РОБОТЫ ПОМОГАЮТ ЛЮДЯМ!</h1>
                            </div>
                            <div>
                                <img src={drone} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}