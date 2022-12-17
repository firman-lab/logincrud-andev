import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import store from './store';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { userApi } from './features/api/apiSlice';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
        <ApiProvider api={userApi}>
            <App />
        </ApiProvider>
        {/* </Provider> */}
    </React.StrictMode>
);
