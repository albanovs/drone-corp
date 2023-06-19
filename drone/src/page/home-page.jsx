import { React } from "react";
import { NavLink, Link } from "react-router-dom";
import drone from "../img/home/drone2.png";
import drone2 from "../img/home/droneforcard.png";
import drone3 from "../img/home/droneOne.png";
import drone4 from "../img/home/drone-two.png";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { AiOutlineForward } from 'react-icons/ai'
import {
  AiOutlineWhatsApp,
  AiFillQuestionCircle,
  AiOutlineRight,
} from "react-icons/ai";
import { GiDeliveryDrone } from "react-icons/gi";
import { RiTelegramLine } from "react-icons/ri";
import Header from "../components/header";
import Footer from "../components/footer";

export const HomePage = () => {

  return (
    <div className="mx-auto">
      <div className="relative bg-site w-full h-screen bg-cover text-white">
        <Header />
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
      <section className="w-full h-full pb-10 lg:pl-20 lg:pr-20 pl-0 pr-0">
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
            <h1 className="m-2 font-bold">ПОГРУЖЕНИЕ</h1>
            <div>
              <img src={drone2} width="200px" height="200px" alt="" />
            </div>
            <p>
              Имея дрон вы можете контролировать свое владение или же ферму.
              Проверить и находить животных. Также следить за работой техники
              или бригады.
            </p>
            <Link to="#podvod"
              className="absolute bottom-6 w-[100] p-2 m-2 rounded flex items-center gap-1 cursor-pointer bg-[#FE390C] transition-all text-white hover:scale-105"
            >
              Подробнее
              <AiOutlineRight />
            </Link>
          </div>
          <div className="relative w-[330px] h-[330px] rounded shadow-2xl flex flex-col items-center">
            <h1 className="m-2 font-bold">СТРОИТЕЛЬСТВО</h1>
            <div>
              <img src={drone3} width="200px" height="300px" alt="" />
            </div>
            <p>
              Наши дроны смогут определить уровень участка а также
              контролировать строительство. Архитектура, геодезия и
              градостроительство.
            </p>
            <NavLink
              to="/service"
              className="absolute bottom-6 w-[100] p-2 m-2 rounded flex items-center gap-1 cursor-pointer bg-[#FE390C] transition-all text-white hover:scale-105"
            >
              Подробнее
              <AiOutlineRight />
            </NavLink>
          </div>
          <div className="relative w-[330px] h-[330px] rounded shadow-2xl flex flex-col items-center">
            <h1 className="m-2 font-bold">ЭЛЛЕКТРИЧЕСТВО</h1>
            <div>
              <img src={drone4} width="200" alt="" />
            </div>
            <p>
              Если вы имеете рыбную ферму который находится в активной реке или
              в озере, то у вас есть много задач который связанный с
              погружением.
            </p>
            <NavLink
              to="/service"
              className="absolute bottom-6 w-[100] p-2 m-2 rounded flex items-center gap-1 cursor-pointer bg-[#FE390C] text-white hover:scale-105 transition-all"
            >
              Подробнее
              <AiOutlineRight />
            </NavLink>
          </div>
        </div>
      </section>
      <section className="w-full h-screen lg:pl-20 lg:pr-20 bg-black/95">
        <div>
          <h1 className="text-white text-center flex flex-col items-center pt-10">
            <GiDeliveryDrone size={50} /> Дроны - инновационное решение для
            хорошего урожая
          </h1>
          <div className="flex flex-col lg:flex-row gap-20 items-center lg:justify-evenly justify-center mt-10">
            <iframe
              className="border lg:w-[600px] lg:h-[400px] w-[370px] h-[220px]"
              src="https://www.youtube.com/embed/nYzSo8tOZFo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="text-white lg:w-[600px] w-[400px] text-sm lg:text-[14px] flex flex-col gap-10">
              <div className="border-b">
                <h1 className="text-[#FE390C]">СЕЛЬСКОЕ ХОЗЯЙСТВО</h1>
                <div className="flex justify-between f-full">
                  <p className="text-[12px]">Данный модель дрона многофункциональна и проста в использовании. Оно сэкономит ваше время и силы.</p>
                  <NavLink to="/service" className="text-[10px] text-[#FE390C] flex items-center gap-1">Подробнее <AiOutlineForward /></NavLink>
                </div>
              </div>
              <div className="border-b">
                <h1 className="text-[#FE390C]">МОНИТОРИНГ</h1>
                <div className="flex justify-between w-full">
                  <p className="text-[12px]">Мониторинг сотовой вышки, мониторинг строительства, Карьеры, Тепловизионное обследование.</p>
                  <NavLink to="/service" className="text-[10px] text-[#FE390C] flex items-center gap-1">Подробнее <AiOutlineForward /></NavLink>
                </div>
              </div>
              <div className="border-b">
                <h1 className="text-[#FE390C]">БЕЗОПАСНОСТЬ</h1>
                <div className="flex justif-between w-full">
                  <p className="text-[12px]">Дроны в спасательных операциях уже не редкость. Но не все могут работать объективно и точно.</p>
                  <NavLink to="/service" className="text-[10px] text-[#FE390C] flex items-center gap-1">Подробнее <AiOutlineForward /> </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-screen" id="podvod">
        <div>
          <h1 className="text-center">ПРЕИМУЩЕСТВА ОБРАЩЕНИЯ К УСЛУГАМ ПОДВОДНОГО ДРОНА</h1>
            
        </div>
      </section>
      <Footer />
    </div>
  );
};
