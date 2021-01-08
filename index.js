import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function tick() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

