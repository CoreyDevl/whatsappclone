import React from "react";
import './ChatListItem.css'

export default ({onClick, active}) => {
  return(
    <div 
    className= {`chatListItem ${active?'active':''}`} 
    onClick={onClick}
    >
       <img className="chatListItem--avatar" src="https://kariktheme.com/demos/default/assets/imgs/avatars/avatar-1.jpg" alt="" />
       <div className="chatListItem--lines">
         <div className="chatListItem--line">
           <div className="chatListItem--name">Skinny Bob</div>
           <div className="chatListItem--date">19:00</div>
         </div>
         <div className="chatListItem--line">
           <div className="chatListItem--lastMsg">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias cumque excepturi dolore magni maiores tempore quos iste nihil ipsam nam, dolor debitis reprehenderit temporibus consequuntur tenetur ipsum ab ex!</p>
           </div>

         </div>
       </div>
    </div>
  )
}