import React, { Component } from 'react'
import AddToDo from './AddToDo';
import TodoList from './ToDoList';
import TodoItem from './ToDoItem';

class ToDoIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount = () => {
        const todos = localStorage.getItem('todos');
        if (todos) {
            const savedTodos = JSON.parse(todos);
            this.setState({ todos: savedTodos });
        } else {
            console.log('No Todos')
        }
    };

    addTodo = async (todo) => {
        await this.setState({ todos: [...this.state.todos, {
          text: todo,
          completed: false  
        }] });
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
        console.log(localStorage.getItem('todos'))
    }

    updateTodo = async (todo) => {
        const newTodos = this.state.todos.map(_todo => {
            if(todo === _todo)
            return {
                text: todo.text,
                completed: !todo.completed
            } 
            else 
            return _todo
        });
        console.log(newTodos)
        await this.setState({todos: newTodos})
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }


    render() {
        return (
            <div>
                <h3> Todo List: </h3>
                <h6>(click Item to complete)</h6>
                <hr></hr>
                <AddToDo addTodo={this.addTodo} />
                <TodoList updateTodo = {this.updateTodo} todos = {this.state.todos}/>
                <br/>
                <br/>
            </div>
        )
    }


};



export default ToDoIndex;

