import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setAccessToken } from '@/redux/slices/auth';

const Home: React.FC = () => {
  const { auth } = useAppSelector((state) => state);
  console.log(auth.accessToken);

  const dispatch = useAppDispatch();

  const handleLogin = (): void => {
    dispatch(setAccessToken('121287123jbwww77'));
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default Home;
