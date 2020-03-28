import React, { Component } from 'react';
import ToDoListTemplate from './components/ToDoListTemplate';
import Form from './components/Form';
import ToDoItemList from './components/ToDoItemList';
import './App.css';

class App extends Component {
  
  id = 3;

  state = { 
    input: '',
    todos: [
      {id: 0, text: '이벤트 다뤄야하는 것도 많고', checked: false},
      {id: 1, text: '조금 많이 어럅지만', checked: true },
      {id: 2, text: '정리하면서 공부좀 더 하렵니다.', checked: false}
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === "Enter")
      this.handleCreate();
  }

  handlToggle = (id) => {
    const index = this.state.todos.findIndex(todo => todo.id === id);
    const selected = this.state.todos[index];
    const nextTodos = [...this.state.todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !==id)
    })
  }
  

  render() {  
    //const { input } = this.state;
    //const {
    //  handleCreate,
    //  handleChange,
    //  handleKeyPress
    //} = this;
     return (
     <ToDoListTemplate form={(
       <Form 
          value={this.state.input}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          onCreate={this.handleCreate}
          />
     )}>
      <ToDoItemList 
      todos={this.state.todos} 
      onToggle={this.handlToggle}
      onRemove={this.handleRemove}
      />
     </ToDoListTemplate>
     );
  }
}

export default App;
