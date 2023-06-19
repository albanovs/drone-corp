import React from "react";

import drones from "../img/home/drone3.png";
import mulitfac from "../img/about/mulitfac.png";
import desic from "../img/about/desic.jpg";
import opyl from "../img/about/opyl.jpg";

import pojar from '../img/about/pojar.jpg'
import poisc from '../img/about/poisc.jpg'
import spas from '../img/about/spas.jpg'

import Header from "../components/header";

import { GiMountains } from 'react-icons/gi';
import Footer from "../components/footer";
import { CgShoppingCart } from 'react-icons/cg'
import {BsShieldFillCheck} from 'react-icons/bs'

const About = () => {
  return (
    <div className="mx-auto">
      <div className="bg-site w-full h-screen lg:h-96">
        <Header />
        <div className="flex justify-center items-center flex-col  pt-20">
          <img className="lg:w-2/5 w-90" src={drones} alt="" />
        </div>
      </div>
      <section className="">
        <h1 className="text-center lg:pt-[100px] pb-1 pt-10 text-2xl lg:text-4xl font-bold flex flex-col items-center">
          <GiMountains size={30} className="text-[#FE390C]" />
          Сельское хозяйство
        </h1>
        <div className="pt-10 pb-10 w-full flex lg:justify-around flex-col lg:flex-row items-center">
          <div>
            <img
              className="lg:w-96 w-60 border border-[#FE390C]"
              src={mulitfac}
              alt=""
            />
          </div>
          <div>
            <div className="flex justify-center lg:justify-start items-center">
              <h1 className="font-bold text-6xl text-[#FE390C]">01</h1>
              <h3 className="lg:w-96 w-40 font-bold text-sm lg:text-xl text-black">
                МУЛЬТИСПЕКТРАЛЬНОЕ ИССЛЕДОВАНИЕ
              </h3>
            </div>
            <p className="text-sm lg:w-[600px] w-[330px] lg:text-left text-center">
              Наша компания предлагает инновационное решение для фермеров —
              Мультиспектральную съемку полей дроном. Мы предлагаем новейшие
              технологии в области сельского хозяйства с применением агродронов,
              которые повысят рентабельность вашего бизнеса. Наша главная цель —
              помочь сельскохозяйственным производителям поднять качество и
              количество урожая.
            </p>
            <div className="text-sm p-2 border border-[#FE390C] float-right cursor-pointer bg-[#FE390C] transition-all  rounded text-white flex items-center gap-1 m-3 hover:scale-105"> <CgShoppingCart /> Заказать</div>
          </div>
        </div>
        <div className="pt-10 pb-10 w-full flex lg:justify-around flex-col-reverse lg:flex-row items-center">
          <div>
            <div className="flex justify-center lg:justify-start items-center">
              <h1 className="font-bold text-6xl text-[#FE390C]">02</h1>
              <h3 className="lg:w-96 w-40 font-bold text-sm lg:text-xl text-black">
                ДЕСИКАЦИЯ
              </h3>
            </div>
            <p className="text-sm lg:w-[600px] w-[330px] lg:text-left text-center">
              Наша компания предлагает инновационное решение для фермеров —
              Мультиспектральную съемку полей дроном. Мы предлагаем новейшие
              технологии в области сельского хозяйства с применением агродронов,
              которые повысят рентабельность вашего бизнеса. Наша главная цель —
              помочь сельскохозяйственным производителям поднять качество и
              количество урожая.
            </p>
            <div className="text-sm p-2 border border-[#FE390C] float-right cursor-pointer bg-[#FE390C] transition-all  rounded text-white flex items-center gap-1 m-3 hover:scale-105"> <CgShoppingCart /> Заказать</div>
          </div>
          <div>
            <img
              className="lg:w-96 w-60 border border-[#FE390C]"
              src={desic}
              alt=""
            />
          </div>
        </div>
        <div className="pt-10 pb-10 w-full flex lg:justify-around flex-col lg:flex-row items-center">
          <div>
            <img
              className="lg:w-96 w-60 border border-[#FE390C]"
              src={opyl}
              alt=""
            />
          </div>
          <div>
            <div className="flex justify-center lg:justify-start items-center">
              <h1 className="font-bold text-6xl text-[#FE390C]">03</h1>
              <h3 className="lg:w-96 w-40 font-bold text-sm lg:text-xl text-black">
                ОПЫЛЕНИЕ
              </h3>
            </div>
            <p className="text-sm lg:w-[600px] w-[330px] lg:text-left text-center">
              Наша компания предлагает инновационное решение для фермеров —
              Мультиспектральную съемку полей дроном. Мы предлагаем новейшие
              технологии в области сельского хозяйства с применением агродронов,
              которые повысят рентабельность вашего бизнеса. Наша главная цель —
              помочь сельскохозяйственным производителям поднять качество и
              количество урожая.
            </p>
            <div className="text-sm p-2 border border-[#FE390C] float-right cursor-pointer bg-[#FE390C] transition-all  rounded text-white flex items-center gap-1 m-3 hover:scale-105"> <CgShoppingCart /> Заказать</div>
          </div>
        </div>
      </section>
      <section className="w-full bg-black/10">
        <h1 className="text-center lg:pt-[100px] pb-1 pt-10 text-2xl lg:text-4xl font-bold flex flex-col items-center">
          <BsShieldFillCheck size={30} className="text-[#FE390C]" />
          Общая безопасность
        </h1>
        <div className="pt-10 pb-10 w-full flex lg:justify-around flex-col lg:flex-row items-center">
          <div>
            <img
              className="lg:w-96 w-60 border border-[#FE390C]"
              src={pojar}
              alt=""
            />
          </div>
          <div>
            <div className="flex justify-center lg:justify-start items-center">
              <h1 className="font-bold text-6xl text-[#FE390C]">01</h1>
              <h3 className="lg:w-96 w-40 font-bold text-sm lg:text-xl text-black">
                ПОЖАРОТУШЕНИЕ
              </h3>
            </div>
            <p className="text-sm lg:w-[600px] w-[330px] lg:text-left text-center">
              При лесном пожаре с помощью наших дронов мы можем собрать с воздуха данные о пожаре.
              А точнее определить линию огня и различных препятствий. Эти данные передаются пожарным, что облегчает операцию облегчает намного.
              С городскими пожарами аналогичным образом получаем данные и тоже передаем данные пожарным.
            </p>
            <div className="text-sm p-2 border border-[#FE390C] float-right cursor-pointer bg-[#FE390C] transition-all  rounded text-white flex items-center gap-1 m-3 hover:scale-105"> <CgShoppingCart /> Заказать</div>
          </div>
        </div>
        <div className="pt-10 pb-10 w-full flex lg:justify-around flex-col-reverse lg:flex-row items-center">
          <div>
            <div className="flex justify-center lg:justify-start items-center">
              <h1 className="font-bold text-6xl text-[#FE390C]">02</h1>
              <h3 className="lg:w-96 w-40 font-bold text-sm lg:text-xl text-black">
                Поисково-спасательные опперации.
              </h3>
            </div>
            <p className="text-sm lg:w-[600px] w-[330px] lg:text-left text-center">
              Данная операция поможет вам найти объект или цель быстро и надежно.
              С помощью тепловизора дрон передает все данные оператору в реальном времени. Так же дрон может выполнять различные функции в поисковом операции,
              после находки целя или объекта дрон автоматически передает координаты и место положению объекта оператору немедленно.
              Это поможет быстро и без затрат могут выполнить любую команду при поисковой операции.
            </p>
            <div className="text-sm p-2 border border-[#FE390C] float-right cursor-pointer bg-[#FE390C] transition-all  rounded text-white flex items-center gap-1 m-3 hover:scale-105"> <CgShoppingCart /> Заказать</div>
          </div>
          <div>
            <img
              className="lg:w-96 w-60 border border-[#FE390C]"
              src={poisc}
              alt=""
            />
          </div>
        </div>
        <div className="pt-10 pb-10 w-full flex lg:justify-around flex-col lg:flex-row items-center">
          <div>
            <img
              className="lg:w-96 w-60 border border-[#FE390C]"
              src={spas}
              alt=""
            />
          </div>
          <div>
            <div className="flex justify-center lg:justify-start items-center">
              <h1 className="font-bold text-6xl text-[#FE390C]">03</h1>
              <h3 className="lg:w-96 w-40 font-bold text-sm lg:text-xl text-black">
                Ликвидация стихийных бедствий.
              </h3>
            </div>
            <p className="text-sm lg:w-[600px] w-[330px] lg:text-left text-center">
              Облетайте препятствия и опасные участки, сразу же получая комплексный обзор.
              Новый угол обзора помогает руководить наземными командами, облегчить коммуникацю и синхронизировать спасательные операции.
              Быстрое 2D- и 3D-моделирование районов помогает создавать действенные карты для руководства усилиями по оказанию помощи.
            </p>
            <div className="text-sm p-2 border border-[#FE390C] float-right cursor-pointer bg-[#FE390C] transition-all  rounded text-white flex items-center gap-1 m-3 hover:scale-105"> <CgShoppingCart /> Заказать</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
