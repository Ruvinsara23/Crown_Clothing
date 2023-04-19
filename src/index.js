import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store ,persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements} from '@stripe/react-stripe-js';
import { stripePromise } from './utils/strip-utils/strip-utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter >
        <Provider store={store}>
        <PersistGate persistor={persistor}>
        <Elements stripe={stripePromise}>
            <App />
        </Elements>
            </PersistGate> 
          </Provider> 
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
