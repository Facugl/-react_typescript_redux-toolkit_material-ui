import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import { login } from '@/redux/slices/auth';
import { setThemeMode } from '@/redux/slices/settings';

import { Button, Switch, Typography, CircularProgress } from '@mui/material';

import {
  AppbarStyled,
  AppbarContainerStyled,
  BodyContainerStyled,
  CardStyled
} from '@/pages/Home/HomeStyles';

const Home: React.FC = () => {
  const {
    auth: { accessToken, isLoading },
    settings: { themeMode }
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

  const handleChangeTheme = (): void => {
    dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      <AppbarStyled>
        <AppbarContainerStyled>
          <Typography variant="h6">
            TS - REACT - REDUX TOOLKIT - MATERIAL UI
          </Typography>
          <Switch onChange={handleChangeTheme} />
        </AppbarContainerStyled>
      </AppbarStyled>
      <BodyContainerStyled>
        <CardStyled>
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>

          {isLoading && <CircularProgress size={20} />}
        </CardStyled>
      </BodyContainerStyled>
    </div>
  );
};
export default Home;
