import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
