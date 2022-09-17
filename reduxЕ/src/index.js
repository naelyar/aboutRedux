import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import thunk from "redux-thunk"
import { createStore  ,applyMiddleware } from "redux";
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import { spamFilter } from './components/Midle';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer ,applyMiddleware(thunk , spamFilter
) ,
)
root.render(
    <Provider store={store}>
    <App/>
    </Provider>
);


