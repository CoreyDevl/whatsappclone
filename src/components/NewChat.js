import React, { useState } from 'react';
import './NewChat.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({user, chatList, show, setShow})=>{

  const [list, setList] = useState([
    {id: 123, avatar:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg', name: 'gorduchinha'},
    {id: 123, avatar:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg', name: 'gorduchinha'},
    {id: 123, avatar:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg', name: 'gorduchinha'},
    {id: 123, avatar:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg', name: 'gorduchinha'},
    {id: 123, avatar:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg', name: 'gorduchinha'},
    {id: 123, avatar:'https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg', name: 'gorduchinha'},
  ]);
    
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
         <div key={key} className="newChat--item">
          <img className="newChat--itemAvatar" src={item.avatar} alt="" />
          <div className="newChat--itemName">{item.name}</div>
         </div>

        ))}
      </div>
    </div>
  )
}