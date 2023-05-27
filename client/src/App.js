import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoutesPage from './pages/Routes/RoutesPage';
import { Provider } from "react-redux";
import { ThemeProvider } from '@emotion/react';
import { dashboardTheme } from './theme/DefaultColors';

const App = ({ store }) => {
  const theme = dashboardTheme;
  return (
    <ThemeProvider theme={theme}>
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
