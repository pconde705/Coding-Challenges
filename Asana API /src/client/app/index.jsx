import React from 'react';
import {render} from 'react-dom';
import Form from './form.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>Hello</p>
        <Form />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
