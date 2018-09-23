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

store.dispatch({type: "PLUS", payload: {num: 3}});

store.dispatch({type: "PLUS", payload: {num: 3}});

store.dispatch({type: "MINUS", payload: {num: 3}});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
registerServiceWorker();
