import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '/* add your JSX here */',
      output: '',
      err: ''
    }
  }
  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output: babel.transform(code, {
          stage: 0,
          loose: 'all'
        }).code
      })
    } catch (err) {
      this.setState({err: err.message})
    }
  }
  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea name="" id="" cols="30" rows="10"
                    onChange={this.update}
                    defaultValue={this.state.input}
          ></textarea>
          <pre></pre>
        </div>
      </div>
    );
  }
}

export default App;