import React, { Component } from 'react'
import TodoItem from './ToDoItem';

export default class ToDoList extends Component {
    updateTodo = (todo) => {
        this.props.updateTodo(todo)
    }

    render() {

        const { todos} = this.props;

        return (
            <div className= 'todo-list'>
                {todos.map((todo, index) => {
                    return <TodoItem updateTodo= {this.updateTodo} key= {index} todo = {todo}></TodoItem>
                })}
            </div>
        )
    }
}
