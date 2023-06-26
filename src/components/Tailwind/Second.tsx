import React from 'react';

const cities = [
  { id: 0, avatar: 'V', text: 'Vancouver' },
  { id: 1, avatar: 'S', text: 'Seattle' },
  { id: 2, avatar: 'P', text: 'Portland' },
  { id: 3, avatar: 'S', text: 'Seattle' },
  { id: 4, avatar: 'S', text: 'San Francisco' },
  { id: 5, avatar: 'L', text: 'Los Angeles' },
  { id: 6, avatar: 'S', text: 'San diego' },
];

const Second = () => {
  return (
    <div className='fixed w-full h-full bg-gray-100 flex justify-center items-center'>
      <div className='bg-yellow-400 w-1/2 p-8 pt-32 rounded-2xl shadow-xl'>
        <h3 className='text-2xl pb-2 border-b-2 border-b-black'>Select Destination</h3>
        <ul className='flex flex-col gap-2 mt-6'>
          {cities.map((city) => (
            <li key={city.id} className='flex items-center gap-2 group font-bold'>
              <span className='w-12 h-12 flex justify-center items-center text-2xl bg-black text-white rounded-full group-hover:bg-white group-hover:text-black'>
                {city.avatar}
              </span>
              <span className='text-2xl group-hover:text-white'>{city.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Second;
