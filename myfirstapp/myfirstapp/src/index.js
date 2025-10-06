import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return <div><h1>First Component!</h1></div>;
}

/*   function Greeting() {
    return React.createElement('div', {}, React.createElement('h1', {}, 'Hello World'));
  } */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);

