import React from "react";
import './ChatIntro.css'

export default ()=>{
  return(
    <div className="chatIntro">

      <img src="https://raw.githubusercontent.com/CoreyTattooArt/whatsappclone/master/src/img/whatsappIntro.jpg" alt="" />
      <h1>Mantenha seu celular conectado</h1>
      <div className="initial">
        <div className="initial--box"></div>
        <div className="initial-msg">O WhatsApp conecta ao seu celular para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu celular a uma rede Wi-Fi.</div>
        <div className="initial--box"></div>
      </div>
    </div>
  )
}