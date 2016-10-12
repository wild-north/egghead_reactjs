import React from 'react';

class App extends React.Component {
  render() {
    return (<Button>React</Button>)
  }
}

class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>
  }
}

const Heart = () => <span className="gliphicon gliphicon-heart"></span>

export default App;