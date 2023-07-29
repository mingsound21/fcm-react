import React from "react";
import firebase from 'firebase'; //firebase모듈을 import해줘야 합니다.


//** 여기 config 추가 **//


firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging
  .requestPermission()
  .then(() => {
    console.log("허가");
    return messaging.getToken(); //등록 토큰 받기
  })
  .then(function (token) {
    console.log(token); //토큰 출력
  })
  .catch(function (error) {
    console.log("FCM Error : ", error);
  });

  messaging.onMessage((payload) => {
  console.log(payload.notification.title);
  console.log(payload.notification.body);
});

function App() {
  return (
    <div className="App">
      <h1>FCM TEST</h1>
    </div>
  );
}

export default App;