import React, { useState } from 'react'
import {AiOutlineDelete,AiFillEdit} from 'react-icons/ai'
import EditUser from './EditUser'

function User({deleteUser,user}) {
    const [toggleEdit,setToggleEdit] = useState(false)
    const onClickEdit = ()=>{
       

        setToggleEdit(toggleEdit=>!toggleEdit)
    }
    return (
        <div key={user.id}>
        <li >{user.name}  <button onClick={()=>deleteUser(user.id)}><AiOutlineDelete></AiOutlineDelete></button>
        <button onClick={()=>onClickEdit(user.id)} ><AiFillEdit></AiFillEdit></button>
        
        <EditUser toggleEdit={toggleEdit} currentUser={user} setToggleEdit={setToggleEdit} />
        </li>
        </div>
    )
}

export default User
