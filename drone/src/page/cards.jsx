import { NavLink } from "react-router-dom";


export default function Cards () {
    return (
      <div>
        <div class="flex items-center justify-center flex-col bg-[#E5E5E5] w-full h-full">
          <div class="bg-[#F4F5FA] lg:p-10 pb-10 rounded-xl">
            <div class="flex flex-col justify-center items-center text-center">
              <div class="max-w-sm font-bold font-sans">
                Get the most out of your mobile with the right subscription
              </div>
              <div class="font-light max-w-lg mt-5 text-sm">
                All devices come with free delivery or pickup as standard. See
                information on available shopping options for your location.
              </div>
            </div>

            <div class="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
              <div class="bg-[#FFFBEC] rounded-xl">
                <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl lg:translate-x-4 translate-y-4 w-96 md:w-auto">
                  <div class="mt-3 font-semibold text-lg">Отдел Аналитики</div>
                  <div class="text-sm font-light">Up to 100Mbit/s</div>
                  <div class="my-4">
                    <span class="font-bold text-base">299,-</span>
                    <span class="font-light text-sm">/month</span>
                  </div>

                  <button class="bg-[#F4F5FA] lg:px-10 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                    Перейти
                  </button>
                </div>
              </div>

              <div class="bg-[#F9ECFF] rounded-xl">
                <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl lg:translate-x-4 translate-y-4 w-96 md:w-auto">
                  <div class="mt-3 font-semibold text-lg">Дрон для склада</div>
                  <div class="text-sm font-light w-60 md:w-auto">
                    Unlimited calls
                  </div>
                  <div class="my-4">
                    <span class="font-bold text-base">953,-</span>
                    <span class="font-light text-sm">/month</span>
                  </div>

                  <button class="bg-[#F4F5FA] lg:px-10 px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                    Перейти
                  </button>
                </div>
              </div>

              <div class="bg-[#ECEEFF] rounded-xl">
                <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl lg:translate-x-4 translate-y-4 w-96 md:w-auto">
                  <div class="mt-3 font-semibold text-lg">Пром работы</div>
                  <div class="text-sm font-light w-60 md:w-auto">
                    Up to 100Mbit/s
                  </div>
                  <div class="my-4">
                    <span class="font-bold text-base">1028,-</span>
                    <span class="font-light text-sm">/month</span>
                  </div>

                  <button class="bg-[#F4F5FA] lg:px-10 px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
                    Перейти
                  </button>
                </div>
              </div>
            </div>

            <div class="flex justify-center">
              <NavLink to="/service" className="mt-12 bg-slate-900 text-white px-4 rounded-full py-3">
                Показать еще услуги
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
}