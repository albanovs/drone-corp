import React from "react";
import { NavLink } from "react-router-dom";
import drone from "../img/home/drone2.png";
import drone2 from "../img/home/drone3.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiSocialInstagramCircular } from "react-icons/ti";
import {
  AiOutlineWhatsApp,
  AiFillQuestionCircle,
  AiOutlineRight,
} from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";

export const HomePage = () => {
  return (
    <div className="mx-auto">
      <div className="relative bg-site w-full h-screen bg-cover text-white">
        <header className="lg:flex hidden justify-between items-center lg:pl-20 lg:pr-20 w-full h-[90px] text-sm">
          <div className="text-white">LOGO</div>
          <nav className="w-[500px] flex justify-between">
            <NavLink className="hover:text-[#FE390C] transition-all">
              главная
            </NavLink>
            <NavLink className="hover:text-[#FE390C] transition-all">
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
        <section className="w-full lg:pl-20 lg:pr-20 pt-[120px] lg:pt-0 pl-0 pr-0">
          <div>
            <div className="flex items-center lg:justify-around justify-center flex-col-reverse lg:flex-row mt-0 lg:mt-10">
              <div className="text-center flex flex-col items-center">
                <h1 className="lg:text-[60px] text-[30px] font-bold">
                  RUSROBODRON
                </h1>
                <h1 className="lg:text-[20px] text-[12px] font-semibold text-[#FE390C]">
                  РОБОТЫ ПОМОГАЮТ ЛЮДЯМ!
                </h1>
                <h2 className="lg:w-[500px] w-[280px]  text-[12px] mt-2">
                  Наша команда вам представляет ряд полезных и оптимальных
                  решений для вашего предприятия или бизнеса. Мы работаем на
                  рынке уже год, не смотря на молодость мы сумели приобрести
                  довольно сложный опыт в сфере автоматизации и оптимизации.
                  Наши дроны вам может предложить решение ваших трудностей
                  исходя из ваших данных, что далеко не каждый может.
                </h2>
                <div className="rounded hover:scale-105 w-[160px] h-[40px] grid place-items-center mt-3 cursor-pointer bg-[#FE390C] transition-all hover:text-white">
                  Связаться с нами
                </div>
              </div>
              <div>
                <img src={drone} alt="" />
              </div>
            </div>
            <div className="w-full flex lg:flex-col flex-row justify-center lg:items-end">
              <TiSocialInstagramCircular size={25} className="mt-2" />
              <AiOutlineWhatsApp size={25} className="mt-2" />
              <RiTelegramLine size={25} className="mt-2" />
            </div>
          </div>
        </section>
      </div>
      <section className="w-full h-screen lg:pl-20 lg:pr-20 pl-0 pr-0">
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
        <div className="flex gap-10 lg:gap-0 lg:justify-evenly items-center flex-col lg:flex-row text-sm text-center">
          <div className="relative w-[330px] h-[330px] rounded shadow-2xl flex flex-col items-center">
            <h1 className="m-2 font-bold">ПРИЛОЖЕНИЯ</h1>
            <div>
              <img src={drone2} width="200px" height="200px" alt="" />
            </div>
            <p>
              Имея дрон вы можете контролировать свое владение или же ферму.
              Проверить и находить животных. Также следить за работой техники
              или бригады.
            </p>
            <div className="absolute bottom-6 w-[100] p-2 m-2 rounded flex items-center gap-1 cursor-pointer bg-[#FE390C] transition-all text-white hover:scale-105">
              Подробнее
              <AiOutlineRight />
            </div>
          </div>
          <div className="relative w-[330px] h-[330px] rounded shadow-2xl flex flex-col items-center">
            <h1 className="m-2 font-bold">СТРОИТЕЛЬСТВО</h1>
            <div>
              <img src={drone2} width="200px" height="300px" alt="" />
            </div>
            <p>
              Наши дроны смогут определить уровень участка а также
              контролировать строительство. Архитектура, геодезия и
              градостроительство.
            </p>
            <div className="absolute bottom-6 w-[100] p-2 m-2 rounded flex items-center gap-1 cursor-pointer bg-[#FE390C] transition-all text-white hover:scale-105">
              Подробнее
              <AiOutlineRight />
            </div>
          </div>
          <div className="relative w-[330px] h-[330px] rounded shadow-2xl flex flex-col items-center">
            <h1 className="m-2 font-bold">ЭЛЛЕКТРИЧЕСТВО</h1>
            <div>
              <img src={drone2} width="200" alt="" />
            </div>
            <p>
              Если вы имеете рыбную ферму который находится в активной реке или
              в озере, то у вас есть много задач который связанный с
              погружением.
            </p>
            <div className="absolute bottom-6 w-[100] p-2 m-2 rounded flex items-center gap-1 cursor-pointer bg-[#FE390C] text-white hover:scale-105 transition-all">
              Подробнее
              <AiOutlineRight />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
