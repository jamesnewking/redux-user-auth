import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
//email: yourmail@yahoo.com
//password: password
export function createAccount(userInfo) {
    return async (dispatch) => {
        try {
            const resp = await axios.post(`${BASE_URL}/signup`, userInfo);

            localStorage.setItem('token',resp.data.token);

            dispatch({ type: types.SIGN_UP });
            console.log('Sign up response: ', resp);
        } catch(err){
            console.log('Sign up error:', err.message);
        }
    }
}

export function accountSignIn(userInfo){
    return async dispatch => {
        try {
            const resp = await axios.post(`${BASE_URL}/signin`, userInfo);

            localStorage.setItem('token',resp.data.token);//console:application,storage,local storage
            dispatch({ type: types.SIGN_IN });
        } catch(err){

            console.log('Error Signing in:', err.message);
        }

    }
}

export function signOut(){
    localStorage.removeItem('token');

    return { type: types.SIGN_OUT};
}

export function getMovieQuote(){
    return async dispatch => {
        try {
            const axiosConfig = {
                headers: {
                    authorization: localStorage.getItem('token')
                }

            }
            const resp = await axios.get(BASE_URL, axiosConfig);
            console.log('Get quote resp', resp);

            dispatch({
                type: types.GET_MOVIE_QUOTE,
                quote: resp.data.message
            });

        } catch(err){
            console.log('Get quote error', err.message);
        }
    }
}