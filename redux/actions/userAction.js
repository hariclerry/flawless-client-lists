import * as userTypes from "../types";

export const fetchUsersDone = (data) => {
    return {
        type: userTypes.FETCH_USERS,
        payload: data
    }
}

export const addUsers = (data) => {
    return {
        type: userTypes.ADD_USERS,
        payload: data
    }
}

const fetchUserFailed = () => {
    return {
        type: 'GET_DATA_FAILED'
    };
}



export const fetchUsers = (url) => dispatch => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            dispatch(fetchUsersDone(data));
        })
        .catch(error => {
            dispatch(fetchUserFailed(error));
        })
}

export const addClient = (url, data) => dispatch => {
    console.log("add client's details successful", data)

    //peform ajax [post] here
    dispatch(addUsers(data));
}