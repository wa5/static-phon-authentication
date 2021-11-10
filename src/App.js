import React, { Component } from 'react';
import firebaseConfig from './firebase';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css';
import Fun from './Fun';

class App extends Component {
  componentDidMount() {
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

  };
  render() {
    return (
      <>
      <div id='firebaseui-auth-container'>
        
      </div>
      <Fun/>
      </>
    );
  }
}
export default App;