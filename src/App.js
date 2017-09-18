import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MenuList extends Component {
  constructor({ containerStyle }) {
    super()
    this.containerStyle = containerStyle
  }

  render() {
    return <div>
      <p>style: {JSON.stringify(this.containerStyle)}</p>
      { this.props.children }
    </div>
  }
}

const MenuListItem = ({ darkTheme = false }) => <div>
  <p>darkTheme: {JSON.stringify(darkTheme)}</p>
</div>

class App extends Component {
  state = { user: null }

  constructor() {
    super()
    window.app = this
  }

  addUser() {
    this.setState({ user: true })
  }

  render() {
    return (
      <div className="App">
        <MenuList containerStyle="container style">
          { this.state.user ?
            <MenuListItem darkTheme={true} /> :
            <MenuListItem />
          }
        </MenuList>
      </div>
    );
  }
}

export default App;
