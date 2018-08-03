import qs from 'qs';
import axios from 'axios';

const API_URL = 'https://fnf4hycsad.execute-api.eu-west-2.amazonaws.com/prod/reko_api?';

export function fetchUserInfo(id){

    const url = `${API_URL}cust=${id}`;
    
    return (dispatch) => {
        dispatch({ type: 'FETCH_USER_START' });
        axios.get(url).then(
        (response) => dispatch({
            type: 'FETCH_USER_SUCCESS',
            payload: [ response.data , id ]
        }),
        (err) => dispatch({
            type: 'FETCH_USER_FAIL',
            error: true,
            payload: err
        })
        );
    }
}

export function saveUserInfo(id, frmDta){
    console.log('s');
    const url = `${API_URL}cust=${id}`;
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*", 
    }
    return (dispatch) => {
        dispatch({ type: 'SAVE_USER_START' });
        axios.put(url, frmDta , headers).then(
        (response) => dispatch({
            type: 'SAVE_USER_SUCCESS',
            payload: [ response.data , id ]
        }),
        (err) => dispatch({
            type: 'SAVE_USER_FAIL',
            error: true,
            payload: err
        })
        );
    }
}