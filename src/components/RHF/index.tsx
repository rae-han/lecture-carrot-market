import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  username: string;
  password: string;
  email: string;
}

const ReactHookFormAssignment = () => {
  const [message, setMessage] = useState('');

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const onValid = () => {
    setMessage('Thank you');
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <ul>
        <li>
          <label htmlFor="username">Name:</label>
          <input
            {...register('username', {
              required: 'Please write down your name.',
            })}
            id="username"
            type="text"
            placeholder="Username"
          />
          <span>{errors.username?.message}</span>
        </li>
        <li>
          <label htmlFor="email">Email:</label>
          <input
            {...register('email', {
              required: 'Please write down your email.',
              validate: {
                onlyNaver: (value) => value.includes('naver.com') || 'Only @naver emails allowed',
              },
            })}
            id="email"
            type="email"
            placeholder="Email"
          />
          <span>{errors.email?.message}</span>
        </li>
        <li>
          {' '}
          <label htmlFor="password">Password:</label>
          <input
            {...register('password', {
              required: 'Please write down your password.',
              minLength: {
                message: 'Password has to be more than 10 chars.',
                value: 10,
              },
            })}
            id="password"
            type="password"
            placeholder="Password"
          />
          <span>{errors.password?.message}</span>
        </li>
      </ul>
      <input type="submit" value="Log in" />
      <p>{message}</p>
    </form>
  );
};

export default ReactHookFormAssignment;
