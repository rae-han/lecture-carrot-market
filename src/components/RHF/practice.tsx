import React from 'react';
import { FieldError, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

interface FormData {
  department: 'string';
  motivation: 'string';
  salary: 'string';
  introduction: 'string';
  dreams: 'string';
  email: 'string';
  errors: 'string';
}

const App = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onValid: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const onInvalid: SubmitErrorHandler<FormData> = (error) => {
    console.error(error);
  };

  return (
    <section className="flex justify-center items-center fixed bg-sky-50 w-screen h-screen top-0 bottom-0 left-0 right-0">
      <main className=" p-10 bg-pink-100 border-2 border-black rounded-2xl min-w-[480px]">
        <h1 className="font-bold text-center text-2xl">Job Application Form</h1>
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          <h2>What department do you want to work for?</h2>
          <label>
            <input {...register('department', { required: true })} type="radio" value="Sales" />
            Sales
          </label>
          <label>
            <input {...register('department', { required: true })} type="radio" value="Marketing" />
            Marketing
          </label>
          <label>
            <input {...register('department', { required: true })} type="radio" value="Accounting" />
            Accounting
          </label>
          <label>
            <input {...register('department', { required: true })} type="radio" value="Customer Service" />
            Customer Service
          </label>
          <h2>Why do you want to join this company?</h2>
          <label>
            <input {...register('motivation', { required: true })} type="radio" value="I wan money!" />I want money!
          </label>
          <label>
            <input {...register('motivation', { required: true })} type="radio" value=" love this company" />I love this company
          </label>
          <label>
            <input {...register('motivation', { required: true })} type="radio" value="I want to learn" />I want to learn
          </label>
          <label>
            <input {...register('motivation', { required: true })} type="radio" value="I don't know why" />I don't know why
          </label>
          <label htmlFor="Salary">Salary</label>
          <select {...register('salary', { required: true })} id="Salary">
            <option value="50">$50</option>
            <option value="100">$100</option>
            <option value="150">$150</option>
            <option value="200">$200</option>
          </select>
          <label htmlFor="Introduction">Intoduce yourself</label>
          <input {...register('introduction', { required: true })} id="Introduction" />
          <label htmlFor="Dreams">Intoduce yourself</label>
          <textarea {...register('dreams', { required: true })} id="Dreams" />
          <label htmlFor="Email">Intoduce yourself</label>
          <input {...register('email', { required: true })} id="Email" />
          <input type="submit" />
        </form>
      </main>
    </section>
  );
};

export default App;
