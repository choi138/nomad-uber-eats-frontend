import { isSignInVar } from '@/main';

export const SignInPage: React.FC = () => {
  const onClick = () => {
    isSignInVar(false);
  };
  return (
    <div>
      <span>This is sign in page</span>
      <br />
      <button onClick={onClick}>Click to signOut</button>
    </div>
  );
};
