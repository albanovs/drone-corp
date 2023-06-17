import React from 'react';
import drone from "../img/home/drone3.png"
import droneO from "../img/home/drone4.png"
import droneOne from "../img/home/droneOne.png"
import droneTwo from "../img/home/drone-two.png"
import droneThree from "../img/home/droneThree.png"

const About = () => {

    return (
        <div className="mx-auto">
            <div className="bg-black w-full h-96 min-h-full ">
                <div className="flex justify-center items-center flex-col  pt-20 ">
                    <img className="w-2/5" src={drone} alt=""/>
                    <div className="absolute">
                        <h1 className="text-white text-6xl text font-bold">
                            СЕЛЬСКОЕ ХОЗЯЙСТВО</h1>
                    </div>
                </div>
            </div>
            <section className="flex  justify-center items-center   ">
                <div >
                    <img className="w-96 py-20" src={droneO} alt=""/>
                </div>
                <div className="w-1/1">
                    <div className="flex items-center mb-4">
                        <h1 className="font-bold text-6xl text-amber-950">01</h1>
                        <h2 className="font-bold text-3xl text-black ">ABOUT ME</h2>
                    </div>
                    <h3 className="w-96 font-bold text-2xl text-black mb-4">
                        МУЛЬТИСПЕКТРАЛЬНОЕ ИССЛЕДОВАНИЕ
                    </h3>
                    <p className="truncate md:text-clip"> Наша компания предлагает инновационное решение для фермеров — <br/>
                        Мультиспектральную съемку полей дроном.
                        <br/>
                        Мы предлагаем новейшие технологии в области сельского хозяйства с <br/>
                        применением агродронов,
                        которые повысят рентабельность вашего <br/> бизнеса. <br/>
                        Наша главная цель — помочь сельскохозяйственным производителям поднять качество и количество
                        урожая. <br/>
                        Для этого мы предлагаем использовать дроны, которые позволяют <br/> проводить исследования
                        мультиспектральной камерой, <br/> составлять карты <br/> полей и определять границы
                        участков. <br/>
                        Исследование мультиспектральной камерой — это идеальный <br/> инструмент для определения
                        «здоровья»
                        растений на поле. Благодаря <br/> данным полученным мультиспектральной камерой, вы сможете
                        получать <br/>
                        информацию о состоянии каждого саженца и вносить удобрения или <br/> химикаты в той
                        концентрации,
                        которая нужна на определенном участке. <br/>

                        Это значительно снижает затраты, и повышает урожайность. <br/>
                        Обращайтесь к нам для того, чтобы узнать больше о возможностях, <br/> которые предоставляют
                        дроны в
                        сельском хозяйстве и начните <br/> увеличивать прибыль на вашем фермерском хозяйстве уже
                        сегодня!
                        <br/>
                        культур .</p>

                </div>
            </section>
            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-around text-center">
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div
                                className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <img src={droneOne} alt=""/>
                                <h2 className="title-font font-bold text-3xl mb-4 text-gray-900">ОПЫЛЕНИЕ</h2>
                                <p className="leading-relaxed">В штатной комплектации наши дроны предназначены для
                                    опыления жидких ядохимикатов и удобрений.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div
                                className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <img src={droneTwo} alt=""/>
                                <h2 className="title-font  mb-2 font-bold text-2xl text-gray-900">ДЕСИКАЦИЯ</h2>
                                <p className="leading-relaxed">
                                    При установлении опциональной системы, мы способны разбрасывать семена,
                                    гранулированные удобрения и кормовые продукты.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div
                                className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                <img src={droneThree} alt=""/>
                                <h2 className="title-font font-bold fnt-medium text-1xl text-gray-900">МУЛЬТИСПЕКТРАЛЬНАЯ
                                    КАМЕРА</h2>
                                <p className="leading-relaxed">
                                    Благодаря тепловизионной камере мы можем определить слабые места почвы. Также можем
                                    определить и состоянию созревания урожая.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;