import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { FormData } from '@typings/form';

interface Props {
  title: string;
  register: UseFormRegister<FormData>;
}

const FormItem = ({ title, register, options }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default FormItem;

// import React, { createContext, PropsWithChildren, useContext } from 'react';
//
// interface FormItem {
//   id: string;
//   value: string;
//   type: string;
//   title: string;
// }
//
// const FormItemContext = createContext({
//   id: '',
//   value: '',
//   type: 'radio',
//   title: '',
// });
//
// export const FormItemWrapper = ({ id, value, type, title, children }: PropsWithChildren<FormItem>) => {
//   const contextValue = { id, value, type, title };
//
//   return <FormItemContext.Provider value={contextValue}>{children}</FormItemContext.Provider>;
// };
//
// export const Title = ({ ...props }) => {
//   const { title } = useContext(FormItemContext);
//
//   return <h2>{title}</h2>;
// };
//
// FormItemWrapper.Title = Title;
//
// export default FormItemWrapper;
