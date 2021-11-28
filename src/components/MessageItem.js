import React from 'react';
import './MessageItem.css';

export default ({data, user}) => {
  return (
    <div 
    style={{
      justifyContent: user.id === data.author ? 'flex-end' :'flex-start'
    }}
    className="messageLine"
    >
      <div 
      style={{backgroundColor:user.id === data.author ? '#DCF8C6': '#FFF'}}
      className="messageItem"
      >
        <div className="messageText">{data.body}</div>
        <div className="messageDate">Hora falsa</div> 
      </div>  
    </div>
  )
}