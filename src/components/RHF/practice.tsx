import React, { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import { FormData, FormItemData } from '@typings/form';
import {
  errorClassNames,
  formClassNames,
  formItemTitleClassNames,
  inputClassNames,
  mainClassNames,
  radioItemClassNames,
  radioItemTextClassNames,
  radioListClassNames,
  sectionClassNames,
  submitClassNames,
  titleClassNames,
} from '@pages/lecture/className';
import { FormItemWrapper } from '@components/RHF/Compound';

const formList: FormItemData[] = [
  {
    id: 0,
    key: 'department',
    title: 'What department do you want to work for?',
    type: 'radio',
    data: [
      { id: 0, value: 'Sales' },
      { id: 1, value: 'Marketing' },
      { id: 2, value: 'Accounting' },
      { id: 3, value: 'Customer Service' },
    ],
    registerOptions: { required: ' *required' },
  },
  {
    id: 1,
    key: 'motivation',
    title: 'Why do you want to join this company?',
    type: 'radio',
    data: [
      { id: 0, value: 'I want money!' },
      { id: 1, value: 'I love this company' },
      { id: 2, value: 'I want to learn' },
      { id: 3, value: "I don't know why" },
    ],
    registerOptions: { required: ' *required' },
  },
  {
    id: 2,
    key: 'salary',
    title: 'Salary',
    type: 'selector',
    data: [
      { id: 0, value: '50' },
      { id: 1, value: '100' },
      { id: 2, value: '150' },
      { id: 3, value: '200' },
    ],
    registerOptions: { required: true },
  },
  {
    id: 3,
    key: 'introduction',
    title: 'Intoduce yourself',
    type: 'text',
    data: [
      { id: 0, value: '50' },
      { id: 1, value: '100' },
      { id: 2, value: '150' },
      { id: 3, value: '200' },
    ],
    registerOptions: { required: true },
  },
];

const App = () => {
  const { formState, register, handleSubmit, watch } = useForm<FormData>({});
  const [formData, setFormData] = useState<FormData | null>(null);
  const { errors } = formState;
  console.log(1, errors);

  const onValid: SubmitHandler<FormData> = (data) => {
    setFormData(data);
  };
  //
  // const watchAllFields = watch();
  //
  // useEffect(() => {
  //   console.log(watchAllFields);
  //   console.log(errors.introduction);
  //   console.log(errors.dreams);
  //   console.log(errors.email);
  //   console.log(errors);
  // }, [watchAllFields, errors]);

  const onInvalid: SubmitErrorHandler<FormData> = (error) => {
    console.error(error);
  };

  return (
    <section className={sectionClassNames}>
      <main className={mainClassNames}>
        <h1 className={titleClassNames}>Job Application Form</h1>
        <form className={formClassNames} onSubmit={handleSubmit(onValid, onInvalid)}>
          {formList.map((item) => (
            <FormItemWrapper key={item.id} data={item} register={register(item.key, item.registerOptions)}>
              <FormItemWrapper.Title error={errors[item.key]?.message} />
              {item.type === 'radio' ? <FormItemWrapper.Radio /> : null}
              {item.type === 'selector' ? <FormItemWrapper.Selector /> : null}
              {item.type === 'text' ? <FormItemWrapper.Selector /> : null}
            </FormItemWrapper>
          ))}
          <h2 className={formItemTitleClassNames}>
            <label htmlFor="Introduction">Intoduce yourself</label>
          </h2>
          <input
            className={inputClassNames(errors.introduction)}
            {...register('introduction', { required: 'Please write down your introduction.' })}
            id="Introduction"
          />
          <span className={errorClassNames}>{errors.introduction?.message}</span>
          <h2 className={formItemTitleClassNames}>
            <label htmlFor="Dreams">Tell us what your dreams are</label>
          </h2>
          <textarea
            className={inputClassNames(errors.dreams)}
            {...register('dreams', {
              required: 'Please tell us what yout dreams are.',
              minLength: { value: 10, message: 'Please write more than 10 characters.' },
            })}
            id="Dreams"
          />
          <span className={errorClassNames}>{errors.dreams?.message}</span>
          <h2 className={formItemTitleClassNames}>
            <label htmlFor="Email">Email</label>
          </h2>
          <input
            className={inputClassNames(errors.email)}
            {...register('email', { required: 'Please write down yout email.' })}
            id="Email"
          />
          <span className={errorClassNames}>{errors.email?.message}</span>
          <input className={submitClassNames} value="Give me this job" type="submit" />
        </form>
        {formData ? JSON.stringify(formData) : null}
      </main>
    </section>
  );
};

export default App;
