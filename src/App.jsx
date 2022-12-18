import { Header } from './components/shared/Header';
import { Products } from './pages/Products';
import './App.css';
import { AuthProvider } from './lib/context/AuthProvider';
import useAuthContext from './lib/hooks/useAuthContext';
import { Login } from './pages/Login';
import NotificationProvider from './lib/context/NotificationProvider';
import ThemeProvider from './lib/context/ThemeProvider';
import useThemeContext from './lib/hooks/useThemeContext';

export const App = () => {
  const { isAuth } = useAuthContext();
  const { darkMode } = useThemeContext();

  return (
    <div className={darkMode ? `DarkApp` : 'App'}>
      {!isAuth && <Login />}
      {isAuth && (
        <div>
          <Header />
          <Products />
        </div>
      )}
    </div>
  );
};

export const AppWithContext = () => {
  return (
    <ThemeProvider>
      <AuthProvider className='App'>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
