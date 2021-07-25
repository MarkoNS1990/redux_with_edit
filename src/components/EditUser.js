import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { fetchEditUser } from '../redux/user/userActions'

function EditUser({toggleEdit,currentUser,setToggleEdit}) {
    const dispatch = useDispatch()
     
    const [name,setName]=useState('')

    const onClickSave = ()=>{
        const user = {...currentUser,name:name}
        console.log(user)
        dispatch(fetchEditUser(user))
        setName('')
        setToggleEdit(state=>!state)
    }

    return (
        toggleEdit &&
        <div>
            <input placeholder='enter new name' onChange={(e)=>setName(e.target.value)}/>
            <button onClick={onClickSave} >Save</button>
        </div>
    )
}

export default EditUser
  