import { AUTH, LOGOUT } from '../constants/actionTypes.js';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            console.log('Auth action data:', action?.data); // Ensure this logs the correct data
            if (action?.data) {
                try {
                    localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
                    console.log('Data stored in localStorage');
                } catch (error) {
                    console.error('Error storing data in localStorage:', error);
                }
            } else {
                console.error('No data to store in localStorage');
            }
            return { ...state, authData: action?.data };

        case LOGOUT:
            localStorage.removeItem('profile');
            return { ...state, authData: null };

        default:
            return state;
    }
};

export default authReducer;
