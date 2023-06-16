import React from "react";
import { NavLink } from "react-router-dom";
import drone from "../img/home/drone2.png";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { AiOutlineWhatsApp, AiFillQuestionCircle } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";

export const HomePage = () => {
  return (
    <div className="mx-auto">
      <div className="bg-site w-full h-screen bg-cover text-white">
        <header className="flex justify-between items-center pl-20 pr-20 w-full h-[90px] text-sm">
          <div className="text-white">LOGO</div>
          <nav className="w-[500px] flex justify-between">
            <NavLink className="hover:text-[#FE390C] transition-all">
              главная
            </NavLink>
            <NavLink className="hover:text-[#FE390C] transition-all">
              услуги
            </NavLink>
            <NavLink className="hover:text-[#FE390C] transition-all">
              главная
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
        <section className="w-full pl-20 pr-20">
          <div>
            <div className="flex items-center justify-around mt-10">
              <div>
                <h1 className="text-[60px] font-bold">RUSROBODRON</h1>
                <h1 className="text-[20px] font-semibold text-[#FE390C]">
                  РОБОТЫ ПОМОГАЮТ ЛЮДЯМ!
                </h1>
                <h2 className="w-[500px] text-[12px] mt-2">
                  Наша команда вам представляет ряд полезных и оптимальных
                  решений для вашего предприятия или бизнеса. Мы работаем на
                  рынке уже год, не смотря на молодость мы сумели приобрести
                  довольно сложный опыт в сфере автоматизации и оптимизации.
                  Наши дроны вам может предложить решение ваших трудностей
                  исходя из ваших данных, что далеко не каждый может.
                </h2>
                <div className="border w-[160px] h-[40px] grid place-items-center mt-3 cursor-pointer bg-[#FE390C] transition-all hover:text-white">
                  Связаться с нами
                </div>
              </div>
              <div>
                <img src={drone} alt="" />
              </div>
            </div>
            <div className="w-full flex flex-col items-end">
              <TiSocialInstagramCircular size={25} className="mt-2" />
              <AiOutlineWhatsApp size={25} className="mt-2" />
              <RiTelegramLine size={25} className="mt-2" />
            </div>
          </div>
        </section>
      </div>
      <section className="w-full h-screen pl-20 pr-20">
        <div className="flex justify-center w-full pt-10">
          <AiFillQuestionCircle size={50} color="#FE390C" />
        </div>
        <h1 className="text-center text-2xl font-bold m-2">
          Почему стоит выбрать именно нас?
        </h1>
        <p className="flex justify-center w-full">
          <p className="text-sm text-center mb-10">
            Мы предлагаем широкий выбор качественных дронов для любых целей и
            потребностей. От развлекательных моделей для любителей до
            профессиональных устройств для видеосъемки и мониторинга, у нас вы
            найдете все, что нужно.
          </p>
        </p>
        <div className="flex justify-evenly">
          <div className="w-[300px] h-[300px] rounded shadow-xl border">
          </div>
          <div className="w-[300px] h-[300px] rounded shadow-xl border"></div>
          <div className="w-[300px] h-[300px] rounded shadow-xl border"></div>
        </div>
      </section>
    </div>
  );
};
