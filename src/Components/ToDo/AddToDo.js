import React, { Component } from 'react'
import './AddToDo.css'

export default class AddToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: ''
        }
    }

    updateInput = (e) => {
        this.setState({ todo: e.target.value})
     
    };

    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todo)
        document.getElementById('addTodoInput').value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.submitTodo(e)} > 
                    <input id="addTodoInput" onChange={(e) => this.updateInput(e)} type='text'></input>
                    <button className = "addtodo-button" type = "submit">  +Add </button>
                </form>
            </div>
        );
    }


}
