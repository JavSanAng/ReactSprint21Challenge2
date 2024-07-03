import './App.css'; // Archivo de estilos CSS
import AppRouter from './routes/RoutesApp';
import Component from './components/Button';
import { ThemeProvider, ThemeContext } from './themes/ThemeContext';
import React, { useContext } from 'react';

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`App ${theme}`}>
      <AppRouter />
      <Component />
    </section>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
