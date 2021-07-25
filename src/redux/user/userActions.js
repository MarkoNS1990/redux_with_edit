import axios from "axios"
import { DELETE_USER, EDIT_USER, FETCH_USERS_BEGIN, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./userActionTypes"

export const fetchUsersBegin = ()=>{
    return {
        type:FETCH_USERS_BEGIN
    }
}

export const fetchUsersSuccess = (users)=>{
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

export const fetchUsersFailure = (error)=>{
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

export const deleteUser = (id)=>{
    return {
        type:DELETE_USER,
        payload:id
    }
}

export const editUser = (user) =>{
    return{
        type:EDIT_USER,
        payload:user
    }
}


//async functions
export const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchUsersBegin)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            dispatch(fetchUsersSuccess(res.data))
            console.log(res.data)
        })
        .catch(error=>dispatch(fetchUsersFailure(error)))
    }
}

export const fetchDeleteUser = (id)=>{
    return (dispatch)=>{
        dispatch(fetchUsersBegin)
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>dispatch(deleteUser(id)))
        .catch(error=>fetchUsersFailure(error))
    }
}

export const fetchEditUser = (user)=>{
    return(dispatch)=>{
        dispatch(fetchUsersBegin)
        axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`,{name:user.name})
        .then(res=>dispatch(editUser(user)))
        .catch(error=>fetchUsersFailure(error))
    }
}