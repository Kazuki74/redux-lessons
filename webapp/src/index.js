import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';
import { createStore } from "redux";

const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({type: "PLUS_ONE"});

store.dispatch({type: "MINUS_ONE"});

store.dispatch({type: "MINUS_ONE"});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
registerServiceWorker();
