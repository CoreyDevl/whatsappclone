import React from "react";
import './ChatWindow.css'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';


export default ()=>{
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
      <div className="chatWindow--footer">

      </div>
 
      
    </div>
  )
}