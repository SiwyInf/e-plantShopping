import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import globalnego store Redux
import App from './App';
import './index.css'; // Import stylów (jeśli używasz)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}> 
            <App />
        </Provider>
    </React.StrictMode>
);
