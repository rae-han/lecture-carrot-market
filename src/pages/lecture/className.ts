import { FieldError } from 'react-hook-form';

const cns = (selector: string, className: string) =>
  className
    .split(' ')
    .map((item) => `${selector}:${item}`)
    .join(' ');

export const sectionClassNames = `flex justify-center items-center fixed bg-sky-50 w-screen h-screen p-4 top-0 bottom-0 left-0 right-0`;

export const mainClassNames = `p-10 bg-pink-100 border-2 border-black rounded-2xl w-[480px] max-h-full overflow-scroll shadow-[2px_2px_0_black]`;

export const titleClassNames = `my-2 font-bold text-center text-2xl`;

export const formClassNames = `
  ${cns('[&>h2]', 'font-bold mt-4 mb-1')} 
  [&>*:nth-child(1)]:mt-8
`;

export const formItemTitleClassNames = `
  font-bold mt-4 mb-1 
`;

export const radioListClassNames = `
  ${cns('[&>label]', 'block bg-black')}
`;

export const radioItemClassNames = `
  block mt-1
`;

export const radioItemTextClassNames = `
  ml-1 text-md
`;

export const inputClassNames = (error?: FieldError) => `
  border-2 border-black w-full rounded-lg px-2 py-1 outline-none
  focus:border-blue-600
  ${error ? 'focus:border-red-600' : ''}
`;

export const inputErrorClassNames = `
  focus:border-red-600
`;

export const errorClassNames = `
  font-bold text-red-600 text-xs
`;

export const submitClassNames = `
  w-full mt-8 p-2 border-2 border-black rounded-xl font-bold bg-yellow-400 text-center shadow-[2px_2px_0_black]
  hover:brightness-150
  active:brightness-75
`;
