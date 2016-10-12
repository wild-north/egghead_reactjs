import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
    this.update = this.update.bind(this);
  }
  update(event) {
    this.setState({
      red:      ReactDom.findDOMNode(this.refs.red).value,
      green:  ReactDom.findDOMNode(this.refs.green).value,
      blue:     ReactDom.findDOMNode(this.refs.blue).value
    });
  }

  render() {
    return (
        <div>
          <div>
              <Slider ref="red" update={this.update} />
              R: {this.state.red}&nbsp;
          </div>
          <div>
              <Slider ref="green" update={this.update} />
              G: {this.state.green}&nbsp;
          </div>
          <div>
              <Slider ref="blue" update={this.update} />
              B: {this.state.blue}&nbsp;
          </div>
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

class Slider extends React.Component {
  render() {
    return <input type = "range"
          min="0"
          max="255"
          onChange = {this.props.update} />
  }
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