import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchDeleteUser, fetchUsers } from '../redux/user/userActions'
import User from './User'




function UserContainer() {
    const dispatch = useDispatch()
    const users = useSelector(state=>state.users)
    
    
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    const deleteUser = (id)=>[
        dispatch(fetchDeleteUser(id))
    ]

    
    

    return (
        <div>
            {users?.map(user=>{
               return <User key={user.id} deleteUser = {deleteUser} user={user}/> 
            })}
        </div>
    )
}

export default UserContainer
