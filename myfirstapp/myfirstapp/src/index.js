import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return (<React.Fragment>
      <Person />
      <Message />
  </React.Fragment>);
}

/*   function Greeting() {
    return React.createElement('div', {}, React.createElement('h1', {}, 'Hello World'));
  } */

const Person = () => {return <h1>First Component!</h1>;};
const Message = () => {return <p>This is my message</p>};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);

