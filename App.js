import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.timeout = 2000;

    this.state = {
      showError: false,
      defaultInput: '/* add your JSX here */',
      init: true,
      output: '',
      err: '',
      input: ''
    };

    this.update = this.update.bind(this);
    this.updateError = this.updateError.bind(this);
    this.cancelErrTimeout= this.cancelErrTimeout.bind(this);
  }
  update(e) {
    let code = e.target.value;

    try {
      this.setState({
        output: babel.transform(code, {stage: 0, loose: 'all'}).code,
        err: '',
        showError: false
      });
      this.cancelErrTimeout();
    } catch (err) {
      this.cancelErrTimeout();

      if (!this.state.showError) {
        this.timerId = setTimeout(() => {
          this.updateError(err);
        }, this.timeout);
      } else {
        this.updateError(err);
      }
    }
  }
  updateError(err) {
    this.setState({
      err: err.message,
      showError: true
    })
  }
  cancelErrTimeout() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }


  render() {
    return (
      <div className={this.state.err ? 'error' : ''}>
        <header>{this.state.err ? `Error: ${this.state.err}` : 'ES6 -> ES5 tool'}</header>
        <div className="container">
          <textarea
            onChange={this.update}
            placeholder={this.state.defaultInput}
          ></textarea>
          <pre>{this.state.err ? this.state.err : this.state.output}</pre>
        </div>
      </div>
    );
  }
}


/*
// INPUT

const App = (props) => {
  let myStyle = {
    backgroundColor: '#000',
    height: 10
  }
  return (
    <div>
      <a href="#"
 notRendered="x"
         onClick={update}
      >
        this is a text
        {i > 10 ? 'more then ten': 'less or equals then 10'}
      </a>
    </div>
  )
}
*/

/*

// OUTPUT


"use strict";

var App = function App(props) {
  var myStyle = {
    backgroundColor: '#000',
    height: 10
  };
  return React.createElement(
    "div",
    null,
    React.createElement(
      "a",
      { href: "#",
        notRendered: "x",
        onClick: update
      },
      "this is a text",
      i > 10 ? 'more then ten' : 'less or equals then 10'
    )
  );
};

*/
export default App;