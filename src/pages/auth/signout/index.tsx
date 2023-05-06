import { useForm } from 'react-hook-form';

import * as S from './styled';

export const SignOutPage: React.FC = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // watch function watch the input value
  const onSubmit = () => {
    console.log(watch()); // You can only watch email by doing ('email') this
  };

  const onInValid = () => {
    console.log(errors);
  };
  return (
    <S.SignOutPageContainer>
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
        </div>
        <div>
          <input
            {...register('password', { required: true })}
            type="password"
            placeholder="password"
          />
        </div>
        <S.SignOutPageSinInButton>Submit</S.SignOutPageSinInButton>
      </form>
    </S.SignOutPageContainer>
  );
};
