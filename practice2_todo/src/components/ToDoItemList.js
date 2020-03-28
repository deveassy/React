import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            ({id, text, checked}) => (
                <ToDoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                 />
             )
         );
        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default ToDoItemList;