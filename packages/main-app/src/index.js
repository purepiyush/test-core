import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {initLibraries} from "@egovernments/digit-ui-libraries";

const initDigitUI = async()=>{
  console.log("Digit Piy", Digit);
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const { default: DigitUI } = await import('./DigitUI');

  console.log("inside index.js of main-app");
  root.render(
      <DigitUI />
  );
}

initLibraries().then(() => {
  initDigitUI();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


