import * as Types from './actionTypes';
import axios from 'axios';

export const getUsers = () => {
    return async dispatch => {
        let action = {
            type: Types.GET_USERS,
            users: [],
            error: null
        };
        try {
            const users = await axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users');
            action.users = users.data;
        } catch (err) {
            action.error = err;
        }
        return dispatch(action);
    }
}

export const userHandler = (array, user) => { 
    let selected = [];  
    let index = array.findIndex(u => u.id === user.id);
    if(index === -1) {
        selected = [...array, user]
    } else {
        array.splice(index, 1);
        selected = [...array];
    }
    localStorage.setItem('selected', JSON.stringify(selected));
    return {
        type: Types.USER_HANDLER,
        selected
    }
}

export const getSelectedFromStorage = () => {
    return dispatch => {
        let get = localStorage.getItem('selected');
        let selected = JSON.parse(get);
        if(selected) {
            return dispatch({
                type: Types.GET_SELECTED_USERS,
                selected
            });
        }
    }
}