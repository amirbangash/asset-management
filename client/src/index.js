import React from 'react';
import ReactDOM from 'react-dom/client';
import './_metronic/assets/Style/main.css'
import App from './App';
//reac-toastify css
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
    <ToastContainer />
  </React.StrictMode>,
);

