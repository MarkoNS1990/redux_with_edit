import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'; 
import { fetchAddUser } from '../redux/user/userActions';

function UserForm() {
    const [name,setName] = useState('')
    const users = useSelector(state=>state.users)
    const dispatch = useDispatch()

    const onAddUser = ()=>{
        const lastUser = users[users.length-1]
        const user = {id:lastUser.id+1,name:name}
        console.log(user)
        dispatch(fetchAddUser(user))
        setName('')
    }

    return (
        <div>
            <input type="text" placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)} />
            <button onClick={onAddUser} >Add user</button>
        </div>
    )
}

export default UserForm
