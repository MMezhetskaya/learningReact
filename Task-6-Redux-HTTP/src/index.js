import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
	createStore,
	applyMiddleware,
	combineReducers,
} from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./App";

const users = (state = [], action) => {
	if (action.type === "ADD_USERS") {

		let alreadyInStore = state.find((element) => {
			if(element.id === action.payload.id) {
				return true;
			}
			return false;
		});

		if(!alreadyInStore) {
			return [
				...state,
				action.payload
			];
		}
	}
	return state;
}

const errors = (state = [], action) => {
	if (action.type === "ADD_ERRORS") {
		return [
			...state,
			action.payload
		];
	}
	return state;
}

const reducer = combineReducers({
	users,
	errors,
});

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"),
);
