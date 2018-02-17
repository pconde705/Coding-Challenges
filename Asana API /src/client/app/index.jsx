import React from 'react';
import {render} from 'react-dom';
import Form from './components/form.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <div className="top-screen">
          <p>Asana API Coding Challenge</p>
        </div>
        <div>
          <p>To begin, enter your your project ID in the input form. Click the Enter button to see a list of your tasks!</p>
        </div>
        <Form />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
