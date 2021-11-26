import React, { useState, useEffect } from 'react';
import './App.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ChatListItem from './components/ChatListItem';
export default () => {

  const [chatList, setChatList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}])


  return (
    <div className="app-windows">
      <div className="sidebar">
        <header>
        <img className="header--avatar" src="https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg" alt="" />
        <div className="header--buttons">
          <div className="header--btn">
            <DonutLargeIcon style={{color: '#54585B'}}/>
          </div>
          <div className="header--btn">
            <ChatIcon style={{color: '#54585B'}}/>
          </div>
          <div className="header--btn">
            <MoreVertIcon style={{color: '#54585B'}}/>
          </div>
        </div>
        </header>
        <div className="search">
        <div className="search--input">
            <SearchIcon fontSize="small" style={{color: '#54585B'}}/>
            <input type="search" placeholder="Pesquisar ou começar uma nova conversa" name="" id="" />
        </div>
        </div>
        <div className="chatlist">
          <div className="chatList--scrollbar">
            {chatList.map((item, key) => (
              <ChatListItem
                key={key}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="contentarea">
  </div>
    </div>
  )
}