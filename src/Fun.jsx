import React from 'react'

import firebaseConfig from './firebase';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css';
function Fun() {
    function mob(){
        firebase.initializeApp(firebaseConfig);
        const uiConfig = {
          signInOptions: [{
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            recaptchaParameters: {
              type: 'image',
              size: 'normal',
              badge: 'bottomleft'
            },
            defaultCountry: 'VN'
          }],
          callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl){
              alert('successful');
              return true;
            }
          },
          signInSuccessUrl : "https://youtube.com"
        };
    
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start("#firebaseui-auth-container", uiConfig);
    
    }
    return (
        <>
           <div id='firebaseui-auth-container'></div> 
           <button onClick={()=>{mob()}}>click me</button>
        </>
    )
}

export default Fun
