import React from 'react';

// https://play.tailwindcss.com/8CqGQK3aIf

const Tenth = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-orange-600">
      <main className="relative w-[480px] aspect-[1/1.618] bg-black border-8 border-gray-800 rounded-[48px] p-4 overflow-hidden">
        <span className="inline-block w-32 bg-black h-16 rounded-2xl absolute -top-4 left-1/2 transform -translate-x-1/2"></span>
        <div className="bg-gray-100 w-full h-full rounded-[27px] flex flex-col flex-nowrap items-center p-4 overflow-y-scroll">
          <div className="w-full">
            <div className="relative h-16 mt-2 border-b-gray-400 border-b-2 w-full flex p-2 items-end ">
              <span className="relative">
                June 2023
                <span className="absolute w-2 h-2 shadow-[-2px_2px_0_gray] transform -rotate-45 top-1 -right-4"></span>
              </span>
            </div>
            <div className="mt-8 font-bold">
              <h2 className="text-center">Hello, Bruno!</h2>
              <h1 className="text-center">Your medicines for today</h1>
            </div>
            <ul className="mt-8 font-bold flex justify-between gap-2 w-full">
              <li className="flex flex-col w-1/6 items-center hover:bg-sky-800 p-2 rounded-2xl">
                <span className="text-xl">26</span>
                <span className="text-[12px]">Mon</span>
              </li>
              <li className="flex flex-col w-1/6 items-center hover:bg-sky-800 p-2 rounded-2xl">
                <span className="text-xl">27</span>
                <span className="text-[12px]">Tue</span>
              </li>
              <li className="flex flex-col w-1/6 items-center hover:bg-sky-800 p-2 rounded-2xl">
                <span className="text-xl">28</span>
                <span className="text-[12px]">Wed</span>
              </li>
              <li className="flex flex-col w-1/6 items-center hover:bg-sky-800 p-2 rounded-2xl bg-emerald-800">
                <span className="text-xl">29</span>
                <span className="text-[12px]">Thu</span>
              </li>
              <li className="flex flex-col w-1/6 items-center hover:bg-sky-800 p-2 rounded-2xl">
                <span className="text-xl">30</span>
                <span className="text-[12px]">Fri</span>
              </li>
              <li className="flex flex-col w-1/6 items-center hover:bg-sky-800 p-2 rounded-2xl">
                <span className="text-xl">31</span>
                <span className="text-[12px]">Sat</span>
              </li>
            </ul>
            <div className="mt-24 bg-blue-400 w-full aspect-[3/2] rounded-3xl relative">
              <div className="bg-yellow-200 w-5/6 h-full rounded-3xl flex flex-col justify-between p-4">
                <div>
                  <h3 className="text-2xl font-bold">Nora - BE</h3>
                  <p className="text-xs">Norenthindrone - 0.35mg</p>
                </div>
                <span className="text-xs">7h30AM</span>
              </div>
              <span className="absolute w-8 h-6 shadow-[-6px_6px_0_black] right-4 top-1/2 transform -rotate-45 -translate-y-1/2"></span>
            </div>
            <div className="mt-2 bg-blue-400 w-full aspect-[3/2] rounded-3xl relative">
              <div className="bg-green-400 w-full h-full rounded-3xl flex flex-col justify-between p-4">
                <div>
                  <h3 className="text-2xl font-bold">Feosol</h3>
                  <p className="text-xs">Ferrous Sulfate - 600mg</p>
                </div>
                <span className="text-xs">7h30AM</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tenth;
