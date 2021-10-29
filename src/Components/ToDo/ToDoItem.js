import React, { Component } from 'react'
import './ToDoItem.css'

export default class ToDoItem extends Component {

    completeTodo = () => {
        this.props.updateTodo(this.props.todo);
    };

    render() {

        const {todo} = this.props
        return (
            <div className= {'todoItem' + (todo.completed ? ' completed' : '')} onClick = {this.completeTodo}>
                {todo.text}
            </div>
        )
    }
}
