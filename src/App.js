import React, { Component } from 'react';
import './App.css';
import Container from './components/Container/Container';
import TaskCreator from './components/TaskCreator/TaskCreator';
import List from './components/List/List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    return (
      <Container>
        <TaskCreator />
        <List />
      </Container>
    );
  }
}

export default App;

