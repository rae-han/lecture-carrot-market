import React from 'react';

// https://play.tailwindcss.com/EbcQF1MlYv

const Eleven = () => {
  return (
    <div className="flex flex-col lg:flex-row [&>main]:flex-shrink-0 flex-wrap justify-center items-center gap-4 min-w-screen min-h-screen bg-pink-100 [&>main]:w-80 [&>main]:h-[720px] py-10">
      <main className="bg-white p-4">
        <h1 className="font-bold text-4xl m-4">Weather</h1>
        <ul>
          <li className="flex gap-2 p-4 border-2 border-b-4 border-black rounded-xl">
            <div className="flex flex-col justify-between flex-1">
              <h2 className="font-bold text-xl">Casius</h2>
              <span className="text-xs">Mars, 12AM</span>
            </div>
            <svg
              className="w-1/6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              ></path>
            </svg>
            <span className="font-bold text-4xl">85°</span>
          </li>
          <li className="flex gap-2 mt-4 p-4 border-2 border-b-4 border-black rounded-xl bg-yellow-400">
            <div className="flex flex-col justify-between flex-1">
              <h2 className="font-bold text-xl">Dlacria</h2>
              <span className="text-xs">Mars, 12AM</span>
            </div>
            <svg
              className="w-1/6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
              ></path>
            </svg>
            <span className="font-bold text-4xl">85°</span>
          </li>
          <li className="flex gap-2 mt-4 p-4 border-2 border-b-4 border-black rounded-xl bg-teal-500">
            <div className="flex flex-col justify-between flex-1">
              <h2 className="font-bold text-xl">New York</h2>
              <span className="text-xs">Mars, 12AM</span>
            </div>
            <svg
              className="w-1/6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              ></path>
            </svg>
            <span className="font-bold text-4xl">85°</span>
          </li>
          <li className="flex gap-2 mt-4 p-4 border-2 border-b-4 border-black rounded-xl bg-orange-600 text-white">
            <div className="flex flex-col justify-between flex-1">
              <h2 className="font-bold text-xl">Zomato</h2>
              <span className="text-xs">Mars, 12AM</span>
            </div>
            <svg
              className="w-1/6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              ></path>
            </svg>
            <span className="font-bold text-4xl">85°</span>
          </li>
        </ul>
        <div className="flex justify-center mt-8">
          <button className="w-16 h-16 my-auto rounded-full border-black border-4 shadow-black shadow-[0_2px]">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
            </svg>
          </button>
        </div>
      </main>
      <main className="bg-white p-4">
        <div className="flex justify-start mt-8">
          <button className="w-12 h-12 my-auto rounded-full border-black border-4 shadow-black shadow-[0_2px]">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <h2 className="mt-2 text-center font-bold">SIMPLE TAG</h2>
        <h1 className="mt-2 text-center font-bold text-4xl">Work with best designers</h1>
        <ul className="grid gap-4 grid-cols-2 mt-8 [&>li]:aspect-[7/8] [&>li]:border-2 [&>li]:border-black [&>li]:rounded-2xl [&>li]:flex [&>li]:justify-center [&>li]:items-center [&>li>svg]:h-12 [&>li>svg]:text-white">
          <li className="bg-yellow-500">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
            </svg>
          </li>
          <li className="bg-teal-500">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
            </svg>
          </li>
          <li className="bg-pink-400">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
            </svg>
          </li>
          <li className="bg-orange-600">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              ></path>
            </svg>
          </li>
        </ul>

        <button className="w-full h-12 mt-8 bg-blue-700 rounded-lg text-white font-bold">Let' get it done</button>
      </main>
      <main className="bg-yellow-400 p-4">
        <div className="relative mt-8">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-3xl">
            Friends
          </h1>
          <button className="w-12 h-12 rounded-full border-black border-4 shadow-black shadow-[0_2px] flex justify-center items-center bg-white">
            <svg
              className="w-8 h-8 -ml-1"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
            </svg>
          </button>
        </div>
        <div className="mt-8 relative">
          <input
            className="border-2 border-b-4 border-black rounded-xl w-full h-12 placeholder-black p-2"
            placeholder="Search with love ..."
          />
          <button className="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                className="w-8 h-8"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="[&>li]:mt-4 [&>li]:border-2 [&>li]:border-black [&>li]:p-2 [&>li]:rounded-xl [&>li]:bg-white">
          <li className="h-18 flex items-center">
            <svg
              className="w-10 h-10 bg-orange-600 rounded-full"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="2.5 2.5 19 19"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMaxYMid meet"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <div className="flex flex-col ml-2 justify-between flex-1">
              <h2 className="font-bold text-lg">Bill Rizer</h2>
              <span className="text-xs text-gray-600">Planet Designer</span>
            </div>
            <button className="p-1 px-3 border-2 border-b-4 border-black rounded-xl font-bold h-10 bg-yellow-500">
              Invite
            </button>
          </li>
          <li className="h-18 flex items-center">
            <svg
              className="w-10 h-10 bg-teal-500 rounded-full"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="2.5 2.5 19 19"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMaxYMid meet"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <div className="flex flex-col ml-2 justify-between flex-1">
              <h2 className="font-bold text-lg">Genbei Yagy</h2>
              <span className="text-xs text-gray-600">Planet Designer</span>
            </div>
            <button className="p-1 px-3 border-2 border-b-4 border-black rounded-xl font-bold h-10 bg-yellow-500">
              Invite
            </button>
          </li>
          <li className="h-18 flex items-center">
            <svg
              className="w-10 h-10 bg-orange-600 rounded-full"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="2.5 2.5 19 19"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMaxYMid meet"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <div className="flex flex-col ml-2 justify-between flex-1">
              <h2 className="font-bold text-lg">Lancy Neo</h2>
              <span className="text-xs text-gray-600">Rogue Corp</span>
            </div>
            <button className="p-1 px-3 border-2 border-b-4 border-black rounded-xl font-bold h-10 bg-yellow-500">
              Invite
            </button>
          </li>
          <li className="h-18 flex items-center">
            <svg
              className="w-10 h-10 bg-yellow-500 rounded-full"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="2.5 2.5 19 19"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMaxYMid meet"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <div className="flex flex-col ml-2 justify-between flex-1">
              <h2 className="font-bold text-lg">Bill Rizer</h2>
              <span className="text-xs text-gray-600">Hand Cops</span>
            </div>
            <button className="p-1 px-3 border-2 border-b-4 border-black rounded-xl font-bold h-10 bg-yellow-500">
              Invite
            </button>
          </li>
          <li className="h-18 flex items-center">
            <svg
              className="w-10 h-10 bg-pink-400 rounded-full"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="2.5 2.5 19 19"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMaxYMid meet"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <div className="flex flex-col ml-2 justify-between flex-1">
              <h2 className="font-bold text-lg">Konami</h2>
              <span className="text-xs text-gray-600">Xenon Creator</span>
            </div>
            <button className="p-1 px-3 border-2 border-b-4 border-black rounded-xl font-bold h-10 bg-yellow-500">
              Invite
            </button>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Eleven;
