import React from 'react';
import { FieldError, useForm } from 'react-hook-form';

import ReactHookFormAssignment from '@components/RHF';

interface FormData {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

const ReactHookForm = () => {
  const {
    clearErrors, // 모든 에러 초기화
    formState: { errors }, // onValid가 실행 될때만 errors를 채운다.
    handleSubmit,
    register,
    reset, // form 초기화
    resetField,
    setError,
    setValue,
    watch,
  } = useForm<FormData>({
    // 제출이 아닌 평상시게도 바로 접하게 쉽게 만들기 위한 옵션
    // onSubmit은 내가 submit 버튼을 누르면 vlidation이 일어난다.
    mode: 'onChange',
  });

  const onValid = (data: FormData) => {
    console.log(1);

    // setError('username', 'error');
    // 통신하고 나서 뭔가 잘못 됐다는걸 가정.
    // setError('errors', { message: 'backend offline' });
    // 이런 식으로 errors 값(formData)을 추가해서 전체 에러를 만들수도 있다.

    // reset(); // 전체 초기화
    resetField('password');
    setValue('username', 'test');
  };

  const onInvalid = (error: FieldError) => {
    console.log(error);
  };

  console.log({ errors });
  // console.log(watch());

  // setValue('username', 'hello');

  return (
    <>
      <ReactHookFormAssignment />
      {/* <form onSubmit={handleSubmit(onValid, onInvalid)}> */}
      {/*  <input */}
      {/*    {...register('username', { */}
      {/*      // required: true, */}
      {/*      required: 'Username is require', */}
      {/*      // minLength: 5, */}
      {/*      minLength: { */}
      {/*        message: 'The username should be logger than 5 chars.', */}
      {/*        value: 5, */}
      {/*      }, */}
      {/*    })} */}
      {/*    type="text" */}
      {/*    placeholder="Username" */}
      {/*  /> */}
      {/*  <span>{errors.username?.message}</span> */}
      {/*  <input */}
      {/*    {...register('email', { */}
      {/*      required: 'Email is require', */}
      {/*      validate: { */}
      {/*        // notGmail: (value) => !value.includes('@gmail.com') */}
      {/*        // notGmail: (value) => (!value.includes('@gmail.com') ? '' : 'Gmail is not allowed '), */}
      {/*        notGmail: (value) => !value.includes('gmail.com') || 'Gmail is not allowed', */}
      {/*      }, */}
      {/*    })} */}
      {/*    type="email" */}
      {/*    placeholder="Email" */}
      {/*  /> */}
      {/*  <span>{errors.email?.message}</span> */}
      {/*  <input {...register('password', { required: 'Password is require' })} type="password" placeholder="Password" /> */}
      {/*  <input type="submit" value="Create Account" /> */}
      {/*  {errors.errors?.message} */}
      {/* </form> */}
    </>
  );
};

export default ReactHookForm;
