import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDom.render(
  <ul><li>React alapok</li><li>Haladó React</li></ul>,
  document.querySelector('.js-container')
);


