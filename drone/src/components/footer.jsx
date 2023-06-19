import React from 'react'
import { BsFillPinMapFill, BsFillTelephoneInboundFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi'
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer class="w-full lg:h-[320px] bg-black/95">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className='flex justify-between'>
                        <div className='text-gray-400 flex flex-col gap-3 mb-5'>
                            <h1>Адрес</h1>
                            <div className='flex items-center gap-2'>
                                <BsFillPinMapFill />
                                <h1 className='text-[12px]'>
                                    г. Санкт-Петербург, ул. ***************** 14 - 190027
                                </h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <BsFillTelephoneInboundFill />
                                <h1 className='text-[12px] hover:text-white cursor-pointer'>
                                    +7 981 737-60-07
                                </h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <HiMail />
                                <h1 className='text-[12px] hover:text-white cursor-pointer'>
                                    rusrobodron@mail.ru
                                </h1>
                            </div>
                        </div>
                        <div className='text-gray-400'>
                            <h1>Время работы</h1>
                            <div className='text-[12px]'>
                                <h1> ПН — ПТ </h1>
                                <p>09:00 - 18:00</p>
                            </div>
                            <div className='text-[12px]'>
                                <h1> СБ — ВС </h1>
                                <p>12:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Logo</span>
                        </a>
                        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <NavLink to="/" className="mr-4 hover:underline md:mr-6 ">Главная</NavLink>
                            </li>
                            <li>
                                <NavLink to="/service" className="mr-4 hover:underline md:mr-6">Услуги</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" className="mr-4 hover:underline md:mr-6 ">О нас</NavLink>
                            </li>
                            <li>
                                <NavLink to="/" classNames="hover:underline">Контакты</NavLink>
                            </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">rusrobodron™</a>. Все права защищены</span>
                </div>
            </footer>


        </div>
    )
}
