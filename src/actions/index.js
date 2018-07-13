import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
//email: yourmail@yahoo.com
//password: password
export function createAccount(userInfo) {
    return async (dispatch) => {
        const resp = await axios.post(`${BASE_URL}/signup`, userInfo);

        console.log('Sign up response: ', resp);
    }
}

export function signIn(){
    return { type: types.SIGN_IN };
}

export function signOut(){
    return { type: types.SIGN_OUT};
}