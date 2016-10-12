import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'some state text',
      cat: 0
    };
  }
  update(event) {
    this.setState({ text: event.target.value});
  }

  render() {
    return (
        <div>
          <input type="text"
            onChange={this.update.bind(this)} />
          <h2>TEXT: {this.state.text}</h2>
        </div>
    )
  }
}
App.propTypes = {
  text: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
  text: "my default text value"
}

ReactDom.render(
  <App text="123123" cat={5}/>,
  document.getElementById('app')
);

export default App;