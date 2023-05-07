import React from 'react';
import { useForm } from 'react-hook-form';

export interface LoginFormValues {
  email: string;
  password: string;
}

export const LoginPage: React.FC = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = () => {
    console.log(getValues());
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800 ">
      <div className="bg-white w-full max-w-lg pt-5 pb-7 rounded-lg text-center ">
        <h3 className="text-3xl text-gray-800">Login Page</h3>
        <form className=" grid gap-5 mt-5 px-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start">
            <input
              {...register('email', {
                required: 'Email is required',
                minLength: {
                  value: 5,
                  message: 'Email must be more than 5 chars',
                },
                maxLength: {
                  value: 20,
                  message: 'Email must be less than 20 chars',
                },
              })}
              placeholder="Email"
              type="email"
              className="input "
            />
            <span className="error">{errors.email?.message}</span>
          </div>
          <div className="flex flex-col items-start">
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be more than 5 chars',
                },
                maxLength: {
                  value: 20,
                  message: 'Password must be less than 20 chars',
                },
              })}
              placeholder="Password"
              type="password"
              className="input "
            />
            <span className="error">{errors.password?.message}</span>
          </div>
          <button className="button mt-3">Log In</button>
        </form>
      </div>
    </div>
  );
};
