import * as Types from './actionTypes';

const init = {
    users: [],
    error: null,
    selected: []
}

export default function usersReducer(state = init, { type, users, error, selected }) {
    switch(type) {
        case Types.GET_USERS: return {...state, users, error};
        case Types.GET_SELECTED_USERS: return {...state, selected};
        case Types.USER_HANDLER: return {...state, selected};
        default: return state;
    }
}