import React, { createContext, PropsWithChildren, useContext } from 'react';
import { UseFormRegister } from 'react-hook-form';

import {
  errorClassNames,
  formItemTitleClassNames,
  inputClassNames,
  radioItemClassNames,
  radioItemTextClassNames,
  radioListClassNames,
} from '@pages/lecture/className';
import { FormData, FormItem } from '@typings/form';

const FormItemContext = createContext<FormItem>({
  data: {
    id: null,
    key: 'errors',
    type: '',
    title: '',
    data: null,
    registerOptions: {},
  },
  register: undefined,
});

export const FormItemWrapper = ({ data, register, children }: PropsWithChildren<FormItem>) => {
  // eslint-disable-next-line
  const contextValue: FormItem = { data, register };

  return <FormItemContext.Provider value={contextValue}>{children}</FormItemContext.Provider>;
};

export const Title = ({ ...props }) => {
  const {
    data: { title },
  } = useContext(FormItemContext);
  const { error: errorMessage } = props;

  return (
    <h2 className={formItemTitleClassNames}>
      {title}
      <span className={errorClassNames}>{errorMessage}</span>
    </h2>
  );
};

export const Radio = ({ ...props }) => {
  const {
    register,
    data: { data },
  } = useContext(FormItemContext);

  if (!register) {
    return null;
  }

  return (
    <div className={radioListClassNames}>
      {data?.map((item) => (
        <label key={item.id} className={radioItemClassNames}>
          <input {...register} type="radio" value={item.value} />
          <span className={radioItemTextClassNames}>{item.value}</span>
        </label>
      ))}
    </div>
  );
};

export const Selector = ({ ...props }) => {
  const {
    register,
    data: { data },
  } = useContext(FormItemContext);

  if (!register) {
    return null;
  }

  return (
    <select id="Salary" className={inputClassNames()} {...register}>
      {data?.map((item) => (
        <option key={item.id} value={item.value}>
          ${item.value}k
        </option>
      ))}
    </select>
  );
};

export const Input = ({ ...props }) => {
  const {
    data: { type },
    register,
  } = useContext(FormItemContext);

  return type === 'text' ? <input /> : <textarea />;
};

FormItemWrapper.Title = Title;
FormItemWrapper.Radio = Radio;
FormItemWrapper.Selector = Selector;
FormItemWrapper.Input = Input;

export default FormItemWrapper;
