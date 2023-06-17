import React from "react";
import drones from "../img/home/drone3.png";
import mulitfac from "../img/about/mulitfac.png";
import desic from "../img/about/desic.jpg";
import opyl from "../img/about/opyl.jpg";

import droneOne from "../img/home/droneOne.png";
import droneTwo from "../img/home/drone-two.png";
import droneThree from "../img/home/droneThree.png";
import Header from "../components/header";

const About = () => {
  return (
    <div className="mx-auto">
      <div className="bg-site w-full h-96 min-h-full ">
        <Header />
        <div className="flex justify-center items-center flex-col  pt-20 ">
          <img className="w-2/5" src={drones} alt="" />
          <div className="absolute">
            <h1 className="text-white text-6xl text font-bold">
              СЕЛЬСКОЕ ХОЗЯЙСТВО
            </h1>
          </div>
        </div>
      </div>
      <section className="">
        <div className="w-full flex justify-around items-center">
          <div>
            <img
              className="w-96 my-20 border border-[#FE390C]"
              src={mulitfac}
              alt=""
            />
          </div>
          <div>
            <div className="flex items-center">
              <h1 className="font-bold text-6xl text-[#FE390C]">01</h1>
              <h3 className="w-96 font-bold text-xl text-black">
                МУЛЬТИСПЕКТРАЛЬНОЕ ИССЛЕДОВАНИЕ
              </h3>
            </div>
            <p className="text-sm w-[600px]">
              Наша компания предлагает инновационное решение для фермеров —
              Мультиспектральную съемку полей дроном. Мы предлагаем новейшие
              технологии в области сельского хозяйства с применением агродронов,
              которые повысят рентабельность вашего бизнеса. Наша главная цель —
              помочь сельскохозяйственным производителям поднять качество и
              количество урожая.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-around items-center">
          <div>
            <div className="flex items-center">
              <h1 className="font-bold text-6xl text-[#FE390C]">02</h1>
              <h3 className="w-96 font-bold text-xl text-black">ДЕСИКАЦИЯ</h3>
            </div>
            <p className="text-sm w-[600px]">
              Наша компания предлагает инновационное решение для фермеров —
              Мультиспектральную съемку полей дроном. Мы предлагаем новейшие
              технологии в области сельского хозяйства с применением агродронов,
              которые повысят рентабельность вашего бизнеса. Наша главная цель —
              помочь сельскохозяйственным производителям поднять качество и
              количество урожая.
            </p>
          </div>
          <div>
            <img
              className="w-96 my-20 border border-[#FE390C]"
              src={desic}
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex justify-around items-center">
          <div>
            <img
              className="w-96 my-20 border border-[#FE390C]"
              src={opyl}
              alt=""
            />
          </div>
          <div>
            <div className="flex items-center">
              <h1 className="font-bold text-6xl text-[#FE390C]">03</h1>
              <h3 className="w-96 font-bold text-xl text-black">ОПЫЛЕНИЕ</h3>
            </div>
            <p className="text-sm w-[600px]">
              Наша компания предлагает инновационное решение для фермеров —
              Мультиспектральную съемку полей дроном. Мы предлагаем новейшие
              технологии в области сельского хозяйства с применением агродронов,
              которые повысят рентабельность вашего бизнеса. Наша главная цель —
              помочь сельскохозяйственным производителям поднять качество и
              количество урожая.
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-around text-center">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img src={droneOne} alt="" />
                <h2 className="title-font font-bold text-3xl mb-4 text-gray-900">
                  ОПЫЛЕНИЕ
                </h2>
                <p className="leading-relaxed">
                  В штатной комплектации наши дроны предназначены для опыления
                  жидких ядохимикатов и удобрений.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img src={droneTwo} alt="" />
                <h2 className="title-font  mb-2 font-bold text-2xl text-gray-900">
                  ДЕСИКАЦИЯ
                </h2>
                <p className="leading-relaxed">
                  При установлении опциональной системы, мы способны
                  разбрасывать семена, гранулированные удобрения и кормовые
                  продукты.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img src={droneThree} alt="" />
                <h2 className="title-font font-bold fnt-medium text-1xl text-gray-900">
                  МУЛЬТИСПЕКТРАЛЬНАЯ КАМЕРА
                </h2>
                <p className="leading-relaxed">
                  Благодаря тепловизионной камере мы можем определить слабые
                  места почвы. Также можем определить и состоянию созревания
                  урожая.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
