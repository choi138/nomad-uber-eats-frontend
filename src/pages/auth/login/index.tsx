import React from 'react';
import { useForm } from 'react-hook-form';

import { gql, useMutation } from '@apollo/client';

import { FormError } from '@/components';

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      ok
      error
      token
    }
  }
`;

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

  const [loginMutation, { loading, error, data }] = useMutation(LOGIN_MUTATION);

  const onSubmit = () => {
    const { email, password } = getValues();
    loginMutation({
      variables: {
        email,
        password,
      },
    });
    console.log(error);
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800 ">
      <div className="bg-white w-full max-w-lg pt-5 pb-7 rounded-lg text-center ">
        <h3 className="text-3xl text-gray-800">Login Page</h3>
        <form className=" grid gap-3 mt-5 px-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-start">
            <input
              {...register('email', {
                required: 'Email is required',
                minLength: {
                  value: 5,
                  message: 'Email must be more than 5 chars',
                },
              })}
              placeholder="Email"
              type="email"
              className="input "
            />
            {errors.email?.message && <FormError errorMessage={errors.email.message} />}
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
            {errors.password?.message && <FormError errorMessage={errors.password.message} />}
          </div>
          <button className="button mt-3">Log In</button>
        </form>
      </div>
    </div>
  );
};
