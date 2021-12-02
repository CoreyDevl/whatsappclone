import React, { useState, useEffect } from 'react';
import './NewChat.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Api from '../Api';

export default ({user, chatList, show, setShow})=>{

  const [list, setList] = useState([]);
  
  useEffect(()=> {
     const getList = async () => {
        if(user !== null){
          let results = await Api.getContactList(user.id)
          setList(results);
        }
    }
    getList();
  },[user])
    
  const addNewChat = async (user2) => {
    await Api.addNewChat(user, user2)
    
    handleClose()
  }

  const handleClose =()=> {
    setShow(false)
  }

  return(
    <div className="newChat" style={{left: show?0:-450}}>
      <div className="newChat--head">
        <div onClick={handleClose} className="newChat--backBtn">
          <ArrowBackIcon style={{color: '#FFF'}} />
        </div>
        <div className="newChat--headTitle">Nova conversa</div>
      </div>
      <div className="newChat--list">
        {list.map((item, key)=>(
         <div onClick={()=> addNewChat(item)} key={key} className="newChat--item">
          <img className="newChat--itemAvatar" src={item.avatar} alt="" />
          <div className="newChat--itemName">{item.name}</div>
         </div>

        ))}
      </div>
    </div>
  )
}