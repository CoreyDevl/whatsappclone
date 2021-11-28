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


  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if(SpeechRecognition !== undefined){
    recognition = new SpeechRecognition();
  }

  const [text, setText] = useState('')

  const [emojiOpen, setEmojiOpen] = useState(false)
  
  const [listening, setListening] = useState(false)
  const handleMicClick = () => {
    if(recognition !== null){
      recognition.onstart = () => {
        setListening(true)
      }
      recognition.onend = () => {
        setListening(false)
      }
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript)
      }
      recognition.start();
    }
  }

  const handleSendClick = () => {

  }

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji)
  }
  
  const handleOpenEmoji = () => {
    setEmojiOpen(true);
    console.log('foi')
  }
  const handleCloseEmoji = () => {
    setEmojiOpen(false);
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
                <div
                onClick={handleCloseEmoji} 
                style={{width: emojiOpen?40:0}}
                className="chatWindow--btn">
                  <CloseIcon />
                </div>
                <div 
                onClick={handleOpenEmoji}
                className="chatWindow--btn"
                >
                <TagFacesIcon style={{color:emojiOpen?'#030A22 ':'#919191'}}/>
                </div>
                <div className="chatWindow--btn">
                  <AttachFileIcon />
                </div>
        </div>
        <div className="chatWindow--inputArea">
          <input className="chatWindow--input" type="text" name="" id="" placeholder="Digite uma mensagem" value={text} onChange={e=>setText(e.target.value)}/>
        </div>
        <div className="chatWindow--pos">

          {text !==''&&
            <div 
            onClick={handleSendClick}
            className="chatWindow--btnChange"
            >
          <SendIcon/> 
          </div>
          }
           
           {text ==''&&
          <div
          onClick={handleMicClick} 
          className="chatWindow--btnChange"
          >
          <MicIcon style={{color: listening? '#126ECE':'#54585B'}}/> 
          </div>
           }
        </div>
      </div>
    </div>
  )
}




 
      