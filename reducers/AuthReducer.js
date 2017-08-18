import {
	NAME_CHANGED,
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	CONFIRM_PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	email: '',
	password: '',
	confirmPassword: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case NAME_CHANGED:
			return { ...state, name: action.payload };
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case CONFIRM_PASSWORD_CHANGED:
			return { ...state, confirmPassword: action.payload };
		default:
			return state;
	}
};
