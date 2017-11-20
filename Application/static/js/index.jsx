import React from "react";
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import todoApp from './reducers';
import App from "./components/App";

let store = createStore(todoApp);
render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>),
    document.getElementById("content")
);

