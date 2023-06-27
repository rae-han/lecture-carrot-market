import React from 'react';

const Third = () => {
  return (
    <>
      <ul>
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex justify-between my-2 odd:bg-blue-50 even:bg-yellow-50 first:bg-teal-50 last:bg-amber-50"
          >
            <span className="text-gray-500">Grey Chair</span>
            <span className="font-semibold">$19</span>
          </div>
        ))}
      </ul>
      <ul>
        {['a', 'b', 'c', ''].map((c, i) => (
          <li className="bg-red-500 py-2 empty:hidden" key={i}>
            {c}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Third;
