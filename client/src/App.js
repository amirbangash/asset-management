import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoutesPage from './pages/RoutesPage';
import { Provider } from "react-redux";
import { ThemeProvider } from '@emotion/react';
import { dashboardTheme } from './dashboardTheme';

const App = ({ store }) => {
  return (
    <ThemeProvider theme={dashboardTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/*' element={<RoutesPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
