import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./custom-hook/Context";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";



// let token = JSON.parse(localStorage.getItem('token'))
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
   
        <App />

    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
