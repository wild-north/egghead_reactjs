import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({ val: ReactDOM.findDOMNode(this.refs.inp).value});
  }
  render() {
    return (
      <div>
        <NumInput
          ref="inp"
          type="range"
          min={0}
          max={255}
          step={0.1}
          label="Red"
          val={+this.state.val}
          update={this.update}
        />
        <label>{this.state.val}</label>
      </div>
    )
  }
}

class NumInput extends React.Component {
  render() {
    return (
      <input
            type={this.props.type}
            min={this.props.min}
            max={this.props.max}
            step={this.props.step}
            defaultValue={this.props.val}
            onChange={this.props.update}
      />
    )
  }
}

NumInput.propTypes = {
  min:    React.PropTypes.number,
  max:    React.PropTypes.number,
  step:   React.PropTypes.number,
  val:    React.PropTypes.number,
  label:  React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type:   React.PropTypes.oneOf(['number', 'range'])
};

NumInput.defaultProps = {
  min:    0,
  max:    255,
  step:   1,
  val:    0,
  label:  '',
  type:   'range'
};


export default App;