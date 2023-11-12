import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';


axios.get('api/topics').then(({ data }) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      
      <BrowserRouter>
      <App initialTopics = {data}/>
      </BrowserRouter>
      
    </React.StrictMode>,
  ); 
})
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
    
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
    
//   </React.StrictMode>,
// );
