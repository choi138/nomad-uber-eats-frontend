import { useForm } from 'react-hook-form';

import * as S from './styled';

export interface LoginFormValues {
  email: string;
  password: string;
}

export const LogoutPage: React.FC = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  // watch function watch the input value
  const onSubmit = () => {
    console.log(watch()); // You can only watch email by doing ('email') this
  };

  const onInValid = () => {
    console.log(errors);
  };
  return (
    <S.LogoutPageContainer>
      <span>This is sign out page</span>
      <br />
      <form onSubmit={handleSubmit(onSubmit, onInValid)}>
        <div>
          <input
            {...register('email', {
              required: "This field can't be empty",
              validate: (email: string) => email.includes('@gmail.com'),
            })}
            type="email"
            placeholder="email"
          />
          <span>{errors?.email?.message}</span>
          <span>{errors.email?.type === 'validate' && 'Only gmail allowed'}</span>
        </div>
        <div>
          <input
            {...register('password', { required: true })}
            type="password"
            placeholder="password"
          />
        </div>
        <S.LogoutPageSinInButton>Submit</S.LogoutPageSinInButton>
      </form>
    </S.LogoutPageContainer>
  );
};
