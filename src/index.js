import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'; 

import './styles.scss';
import App from './app';
import store from '@state';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);