import { isSignInVar } from '@/main';

export const SignOutPage: React.FC = () => {
  const onClick = () => {
    isSignInVar(true);
  };
  return (
    <div>
      <span>This is sign out page</span>
      <br />
      <button onClick={onClick}>Click to signIn</button>
    </div>
  );
};
