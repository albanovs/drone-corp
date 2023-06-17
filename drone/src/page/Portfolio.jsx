import React from 'react';
import drone from "../img/home/drone3.png";
import Slider from "react-slick";

const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll: 3,
        slidesToShow: 3,
    };
    return (
        <div className="mx-auto">
            <div className="bg-black w-full h-96 min-h-full ">
                <div className="flex justify-center items-center flex-col  pt-20 ">
                    <img className="w-2/5" src={drone} alt=""/>
                    <div className="absolute">
                        <h1 className="text-white text-6xl uppercase font-bold ">
                            PORTFOLIO</h1>
                    </div>
                </div>
            </div>
            <section className="flex items-center justify-center flex-col">
                <h1 className="text-6xl font-bold mt-20 mb-6">О НАС</h1>
                <p className="leading-relaxed w-2/3 text-center">Наша команда вам представляет ряд полезных и
                    оптимальных решений для вашего предприятия или бизнеса.
                    Мы работаем на рынке уже год, не смотря на молодость мы сумели приобрести довольно сложный опыт в
                    сфере автоматизации и оптимизации. Наши дроны вам может предложить решение ваших трудностей исходя
                    из ваших данных, что далеко не каждый может.</p>
            </section>
            <section className="">
                <h2> Multiple items </h2>
                <Slider {...settings} >
                    <div>
                        <div>
                            <div
                                className="flex min-h-screen items-center justify-center px-12 bg-white dark:bg-gray-950">
                                <div
                                    className="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
                                    <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                                        <p className="text-gray-700 dark:text-gray-300">I absolutely love Tailus! The
                                            component blocks are beautifully designed and easy to use, which makes
                                            creating a great-looking website a breeze.</p>

                                        <div className="mt-8 flex gap-4 items-center">
                                            <img className="h-12 w-12 rounded-full"
                                                 src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg"
                                                 alt=""/>
                                            <div>
                                                <h3 className="text-lg font-medium text-gray-700 dark:text-white">Oketa
                                                    Fred</h3>
                                                <span
                                                    className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex min-h-screen items-center justify-center px-12 bg-white dark:bg-gray-950">
                            <div
                                className="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
                                <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                                    <p className="text-gray-700 dark:text-gray-300">I absolutely love Tailus! The
                                        component blocks are beautifully designed and easy to use, which makes creating
                                        a great-looking website a breeze.</p>

                                    <div className="mt-8 flex gap-4 items-center">
                                        <img className="h-12 w-12 rounded-full"
                                             src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg"
                                             alt=""/>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-700 dark:text-white">Oketa
                                                Fred</h3>
                                            <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex min-h-screen items-center justify-center px-12 bg-white dark:bg-gray-950">
                            <div
                                className="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
                                <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                                    <p className="text-gray-700 dark:text-gray-300">I absolutely love Tailus! The
                                        component blocks are beautifully designed and easy to use, which makes creating
                                        a great-looking website a breeze.</p>

                                    <div className="mt-8 flex gap-4 items-center">
                                        <img className="h-12 w-12 rounded-full"
                                             src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg"
                                             alt=""/>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-700 dark:text-white">Oketa
                                                Fred</h3>
                                            <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex min-h-screen items-center justify-center px-12 bg-white dark:bg-gray-950">
                            <div
                                className="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
                                <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                                    <p className="text-gray-700 dark:text-gray-300">I absolutely love Tailus! The
                                        component blocks are beautifully designed and easy to use, which makes creating
                                        a great-looking website a breeze.</p>

                                    <div className="mt-8 flex gap-4 items-center">
                                        <img className="h-12 w-12 rounded-full"
                                             src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg"
                                             alt=""/>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-700 dark:text-white">Oketa
                                                Fred</h3>
                                            <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex min-h-screen items-center justify-center px-12 bg-white dark:bg-gray-950">
                            <div
                                className="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
                                <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                                    <p className="text-gray-700 dark:text-gray-300">I absolutely love Tailus! The
                                        component blocks are beautifully designed and easy to use, which makes creating
                                        a great-looking website a breeze.</p>

                                    <div className="mt-8 flex gap-4 items-center">
                                        <img className="h-12 w-12 rounded-full"
                                             src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg"
                                             alt=""/>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-700 dark:text-white">Oketa
                                                Fred</h3>
                                            <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex min-h-screen items-center justify-center px-12 bg-white dark:bg-gray-950">
                            <div
                                className="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
                                <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                                    <p className="text-gray-700 dark:text-gray-300">I absolutely love Tailus! The
                                        component blocks are beautifully designed and easy to use, which makes creating
                                        a great-looking website a breeze.</p>

                                    <div className="mt-8 flex gap-4 items-center">
                                        <img className="h-12 w-12 rounded-full"
                                             src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg"
                                             alt=""/>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-700 dark:text-white">Oketa
                                                Fred</h3>
                                            <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex min-h-screen items-center justify-center px-12 bg-white dark:bg-gray-950">
                            <div
                                className="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
                                <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                                    <p className="text-gray-700 dark:text-gray-300">I absolutely love Tailus! The
                                        component blocks are beautifully designed and easy to use, which makes creating
                                        a great-looking website a breeze.</p>

                                    <div className="mt-8 flex gap-4 items-center">
                                        <img className="h-12 w-12 rounded-full"
                                             src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg"
                                             alt=""/>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-700 dark:text-white">Oketa
                                                Fred</h3>
                                            <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex min-h-screen items-center justify-center px-12 bg-white dark:bg-gray-950">
                            <div
                                className="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
                                <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                                    <p className="text-gray-700 dark:text-gray-300">I absolutely love Tailus! The
                                        component blocks are beautifully designed and easy to use, which makes creating
                                        a great-looking website a breeze.</p>

                                    <div className="mt-8 flex gap-4 items-center">
                                        <img className="h-12 w-12 rounded-full"
                                             src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg"
                                             alt=""/>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-700 dark:text-white">Oketa
                                                Fred</h3>
                                            <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex min-h-screen items-center justify-center px-12 bg-white dark:bg-gray-950">
                            <div
                                className="max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
                                <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
                                    <p className="text-gray-700 dark:text-gray-300">I absolutely love Tailus! The
                                        component blocks are beautifully designed and easy to use, which makes creating
                                        a great-looking website a breeze.</p>

                                    <div className="mt-8 flex gap-4 items-center">
                                        <img className="h-12 w-12 rounded-full"
                                             src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg"
                                             alt=""/>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-700 dark:text-white">Oketa
                                                Fred</h3>
                                            <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        </div>
    );
};

export default Portfolio;