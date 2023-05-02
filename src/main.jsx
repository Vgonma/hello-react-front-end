import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import greetingReducer from './redux/greetingSlice'
import App from './App.jsx'
import './index.css'

const store = configureStore({
  reducer: {
    greeting: greetingReducer
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
