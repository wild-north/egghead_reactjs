import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (<Button><Heart/>React</Button>)
  }
}

class Button extends React.Component {
  constructor() {
    super();
    this.state = {val: 0};
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({
      val: this.state.val + 1
    })
  }
  componentWillMount() {
      console.log('mounting');
  }
  render() {
      console.log(`rendering ${this.state.val}`)
    return <button onClick={this.update}>{this.props.children} {this.state.val}</button>
  }
  componentDidMount() {
    console.log('mounted');
  }
  componentWillUnmount() {
      console.log('bye');
  }
}

class Wrapper extends React.Component {
  constructor() {
    super();
    this.mount = this.mount.bind(this);
    this.unmount = this.unmount.bind(this);
  }
  mount() {
    ReactDOM.render(<App/>, document.getElementById('wrapper'));
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('wrapper'));
  }
  render() {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="wrapper"></div>
      </div>
    )
  }
}

const Heart = () => <span>♥</span>

export default Wrapper;