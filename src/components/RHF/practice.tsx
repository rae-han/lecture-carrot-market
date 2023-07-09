import React, { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import { FormData } from '@typings/form';
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

const formDatas = [
  {
    id: 0,
    title: 'What department do you want to work for?',
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

  const watchAllFields = watch();

  useEffect(() => {
    console.log(watchAllFields);
    console.log(errors.introduction);
    console.log(errors.dreams);
    console.log(errors.email);
    console.log(errors);
  }, [watchAllFields, errors]);

  const onInvalid: SubmitErrorHandler<FormData> = (error) => {
    console.error(error);
  };

  return (
    <section className={sectionClassNames}>
      <main className={mainClassNames}>
        <h1 className={titleClassNames}>Job Application Form</h1>
        <form className={formClassNames} onSubmit={handleSubmit(onValid, onInvalid)}>
          <h2 className={formItemTitleClassNames}>
            What department do you want to work for?<span className={errorClassNames}>{errors.department?.message}</span>
          </h2>
          <div className={radioListClassNames}>
            <label className={radioItemClassNames}>
              <input {...register('department', { required: ' *required' })} type="radio" value="Sales" />
              <span className={radioItemTextClassNames}>Sales</span>
            </label>
            <label className={radioItemClassNames}>
              <input {...register('department', { required: ' *required' })} type="radio" value="Marketing" />
              <span className={radioItemTextClassNames}>Marketing</span>
            </label>
            <label className={radioItemClassNames}>
              <input {...register('department', { required: ' *required' })} type="radio" value="Accounting" />
              <span className={radioItemTextClassNames}>Accounting</span>
            </label>
            <label className={radioItemClassNames}>
              <input {...register('department', { required: ' *required' })} type="radio" value="Customer Service" />
              <span className={radioItemTextClassNames}>Customer Service</span>
            </label>
          </div>
          <h2 className={formItemTitleClassNames}>
            Why do you want to join this company?<span className={errorClassNames}>{errors.motivation?.message}</span>
          </h2>
          <div className={radioListClassNames}>
            <label className={radioItemClassNames}>
              <input {...register('motivation', { required: ' *required' })} type="radio" value="I wan money!" />
              <span className={radioItemTextClassNames}>I want money!</span>
            </label>
            <label className={radioItemClassNames}>
              <input {...register('motivation', { required: ' *required' })} type="radio" value="I love this company" />
              <span className={radioItemTextClassNames}>I love this company</span>
            </label>
            <label className={radioItemClassNames}>
              <input {...register('motivation', { required: ' *required' })} type="radio" value="I want to learn" />
              <span className={radioItemTextClassNames}>I want to learn</span>
            </label>
            <label className={radioItemClassNames}>
              <input {...register('motivation', { required: ' *required' })} type="radio" value="I don't know why" />
              <span className={radioItemTextClassNames}>I don't know why</span>
            </label>
          </div>
          <h2 className={formItemTitleClassNames}>
            <label htmlFor="Salary">Salary</label>
          </h2>
          <select className={inputClassNames()} {...register('salary', { required: true })} id="Salary">
            <option value="50">$50k</option>
            <option value="100">$100k</option>
            <option value="150">$150k</option>
            <option value="200">$200k</option>
          </select>
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
            {...register('dreams', { required: 'Please tell us what yout dreams are.', minLength: 10 })}
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
