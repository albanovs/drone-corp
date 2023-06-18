import React from "react";
import drones from "../img/home/drone3.png";
import mulitfac from "../img/about/mulitfac.png";
import desic from "../img/about/desic.jpg";
import opyl from "../img/about/opyl.jpg";
import Header from "../components/header";

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
        <h1 className="text-center lg:pt-[100px] pb-10 lg:text-4xl font-bold">
          Сельское хозяйство
        </h1>
        <div className="w-full flex lg:justify-around flex-col lg:flex-row items-center">
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
          </div>
        </div>
        <div className="w-full flex lg:justify-around flex-col-reverse lg:flex-row items-center">
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
          </div>
          <div>
            <img
              className="lg:w-96 w-60 border border-[#FE390C]"
              src={desic}
              alt=""
            />
          </div>
        </div>
        <div className="w-full flex lg:justify-around flex-col lg:flex-row items-center">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
