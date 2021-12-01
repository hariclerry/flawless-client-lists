import * as userTypes from "../types";

const initialState = {
    users: [],
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.FETCH_USERS:
            return { ...state, users: action.payload }
        case userTypes.ADD_USERS:
            return { ...state, users: action.payload }
        default: return state
    }
}