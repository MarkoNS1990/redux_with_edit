import { DELETE_USER, EDIT_USER, FETCH_USERS_BEGIN, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from "./userActionTypes"

const initialState = {
    users:[],
    loading:false,
    error:''
}

const userReducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_USERS_BEGIN:
            return {
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.payload
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case DELETE_USER:
            return{
                ...state,
                users:state.users.filter(user=>user.id!==action.payload)
            }
        case EDIT_USER:
            const userToUpdate = state.users.filter(user=>user.id===action.payload.id)[0]
            state.users.splice(state.users.indexOf(userToUpdate), 1, action.payload);
            return{
                ...state,
                users:[...state.users]
            }        
        default:
            return state            
    }
}

export default userReducer