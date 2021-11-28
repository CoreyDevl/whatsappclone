import React from 'react';
import './Login.css';

export default () => {

  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup();
    if(result){
       //ESTAMOS POR CRIAR UM APLICATIVO NO FACEBOOK -3H 32MIN
    }else{
      alert('erro')
    }
  }

  return(
    <div className="login">
      <button onClick={handleFacebookLogin}>Logar com Facebook</button>
    </div>
  )
}