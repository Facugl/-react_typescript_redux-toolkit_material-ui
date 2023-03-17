import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { login } from '@/redux/slices/auth';

const Home: React.FC = () => {
  const {
    auth: { accessToken, isLoading }
  } = useAppSelector((state) => state);
  console.log(accessToken);

  const dispatch = useAppDispatch();

  const handleLogin = (): void => {
    void dispatch(
      login({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      })
    );
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {isLoading && 'Loading...'}
    </div>
  );
};
export default Home;
