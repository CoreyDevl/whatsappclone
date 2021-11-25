import React, { useState, useEffect } from 'react';
import './App.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {
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
          chatlist
        </div>
      </div>
      <div className="contentarea">
how
      </div>
    </div>
  )
}