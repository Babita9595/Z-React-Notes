import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import { NetflixIndex } from './Netflix/netflix-index';
//import { DataBinding } from './Data-Binding/data-binding';
//import {Login} from './component/Login';





import "../node_modules/bootstrap/dist/css/bootstrap.css"; //import bootstrape here
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import { Two_way_Demo } from './useState/two-way-demo';
//import { OneWay_DataBinding } from './useState/One-Way-Bind';


//import { DataBinding5 } from './Data-Binding/data-binding-5';




//import { DataBinding } from './Data-Binding/data-binding';


const root = ReactDOM.createRoot(document.getElementById('root')); // <App />
root.render(

  
  <React.StrictMode>
<Two_way_Demo></Two_way_Demo>
 
  
  </React.StrictMode>

   

);

// <NetflixIndex/>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
