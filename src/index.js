import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore ,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import state from "./redux/mappings/ComponentMappings";
import { ReviewAction } from "./redux/actions/ReviewAction";
let store = createStore(state,applyMiddleware(thunk));
store.dispatch(ReviewAction());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
