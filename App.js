import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = { text: '' };
    this.update = this.update.bind(this);
  }
  update(event) {
    this.setState({ text: event.target.value});
  }

  render() {
    return (
        <div>
          <Widget text={this.state.text} update={this.update} />
          <Widget text={this.state.text} update={this.update} />
          <Widget text={this.state.text} update={this.update} />
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

const Widget = (props) => {
  return (
    <div>
      <input type="text"
            onChange={props.update} />
      <h2>TEXT: {props.text}</h2>
    </div>
  );
}

ReactDom.render(
  <App text="123123" cat={5}/>,
  document.getElementById('app')
);

export default App;