import React from 'react';

const Eleven = () => {
  return (
    <div className="flex flex-col lg:flex-row [&>main]:flex-shrink-0 flex-wrap justify-center items-center gap-4 min-w-screen min-h-screen bg-pink-200 [&>main]:w-80 [&>main]:h-[720px] py-10">
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
          <li className="flex gap-2 mt-4 p-4 border-2 border-b-4 border-black rounded-xl bg-orange-500 text-white">
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
          <button className="w-16 h-16 my-auto rounded-full border-black border-4 shadow-black shadow-[0_4px]">
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
      <main className="bg-white">work with best designers</main>
      <main className="bg-yellow-400">Friends</main>
    </div>
  );
};

export default Eleven;
