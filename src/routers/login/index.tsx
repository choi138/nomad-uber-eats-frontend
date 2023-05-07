import { isLoginVar } from '@/main';

export const LoginRouter: React.FC = () => {
  const onClick = () => {
    isLoginVar(false);
  };
  return (
    <div>
      <span>This is sign in page</span>
      <br />
      <button onClick={onClick}>Click to signOut</button>
    </div>
  );
};
