import { AUTH } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        // log in the user
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });
        console.log(data);
        navigate('/');
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        // Sign up the user
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });
        navigate('/');
    } catch (error) {
        console.log(error)
    }
}