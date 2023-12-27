import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'


// Register the service worker
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js')
//     .then((registration) => {
//       console.log('Service Worker registered with scope:', registration.scope);
//     })
//     .catch((error) => {
//       console.error('Service Worker registration failed:', error);
//     });
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
