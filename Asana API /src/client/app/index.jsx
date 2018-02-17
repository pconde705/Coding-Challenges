import React from 'react';
import {render} from 'react-dom';
import Form from './components/form.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <div className="top-screen">
          
        </div>
        <p>Hello</p>
        <Form />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
