import axios from "axios";

export const plus = num => {
	return {
		type: "PLUS",
		payload: { num : num }
	}
}

export const minus = num => {
	return {
		type: "MINUS",
		payload: { num : num }
	}
}

export const asyncMinus = num => {
	return dispatch => {
		setTimeout( () => {
			dispatch({ type:"MINUS", payload: { num : num } })
		}, 2000)
	}
}

export const changeTitle = title => {
	return { type: "CHANGE_TITLE", payload: { title: title }}
}

export const getJson = () => {
	return dispatch => {
		dispatch(changeTitle("TITLE!"));
	}
}