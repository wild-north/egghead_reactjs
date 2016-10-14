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
  }
  update(e) {
    let code = e.target.value;

    try {
      this.setState({
        output: babel.transform(code, {stage: 0, loose: 'all'}).code,
        err: '',
        showError: false
      })
    } catch (err) {
      if (this.timerId) {
        clearInterval(this.timerId);
      }

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

export default App;