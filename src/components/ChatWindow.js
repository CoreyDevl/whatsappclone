import React, { useState } from "react";
import './ChatWindow.css'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import MicIcon from '@material-ui/icons/Mic';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import EmojiPicker from 'emoji-picker-react';
import { Autorenew } from "@material-ui/icons";

export default ()=>{

  const [emojiOpen, setEmojiOpen] = useState(false)

  const handleEmojiClick = () => {

  }

  return(
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerInfo">
          <img className="chatWindow--avatar" src="https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg" alt="" />
          <div className="chatWindow--name">Bombombiju</div>
        </div>
        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--box"></div>
          <div className="chatWindow--box"></div>
          <div className="chatWindow--btn">
          <SearchIcon />
          </div>
          <div className="chatWindow--btn">
          <MoreVertIcon  />
          </div>
        </div>
      </div>
      <div className="chatWindow--body">
      
      </div>
      <div 
      className="chatWindow--emojiArea" 
      style={{height: emojiOpen ? '200px' : '0px'}}      
      >
        <EmojiPicker 
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
         
        />
      </div>
      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
   
                <div className="chatWindow--btn">
                <CloseIcon /><TagFacesIcon />
                </div>
                <div className="chatWindow--btn">
                  <AttachFileIcon />
                </div>
        </div>
        <div className="chatWindow--inputArea">
          <input className="chatWindow--input" type="text" name="" id="" placeholder="Digite uma mensagem"/>
        </div>
        <div className="chatWindow--pos">
        <div className="chatWindow--btn">
          <SendIcon id="sendBtn"/> 
          <MicIcon></MicIcon>
          </div>
        </div>
      </div>
    </div>
  )
}




 
      