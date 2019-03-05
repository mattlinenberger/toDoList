import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'dinner with wife',
        completed: false
      },
    ]
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
    console.log(id)
  }
  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }
  //Add Todo
  AddTodo =(title) =>{
    const newTodo = {
      id:uuid.v4(),
      title,
      completed:false
    }
    this.setState({todos:[...this.state.todos,newTodo]});
  }
  render() {
    return (
      //have to use 'className' in place of 'class'
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo AddTodo={this.AddTodo}/>
          <Todos delTodo={this.delTodo} todos={this.state.todos} markComplete={this.markComplete} />
        </div>

      </div>
    );
  }
}


export default App;
