import Home from '@/pages/Home';
import { Provider } from 'react-redux';
import store, { persistor } from '@/redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import MuiThemeProvider from '@/theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MuiThemeProvider>
          <Home />
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
