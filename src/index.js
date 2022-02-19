import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
