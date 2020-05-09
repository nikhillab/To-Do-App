import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './Authencat';
import moment from 'moment'
class ListToDo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message: null
        }
        this.deleteToClicked = this.deleteToClicked.bind(this)
        this.UpdateToClicked = this.UpdateToClicked.bind(this)
        this.refreshTodos=this.refreshTodos.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
    }

    componentDidMount() {
        this.refreshTodos();
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.retrieveAllTodos(username)
            .then(
                response =>
                    //console.log(response)
                    this.setState({
                        todos: response.data
                    })
            )
    }

    deleteToClicked(id) {
        let username = AuthenticationService.getLoggedInUsername()
        console.log(username + "   " + id)
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({message: `delete of todo ${id} is success`});
                    this.refreshTodos()
                }
            )
    }

    UpdateToClicked(id) {
        let username = AuthenticationService.getLoggedInUsername()
        console.log(username + "   " + id)
        this.props.history.push(`/todos/${id}`)

    }

    addTodoClicked() {
        this.props.history.push(`/todos/-1`)
    }

    render() {
        return (
            <div className="ListToDo">
                <h1> List to Do</h1>
                {this.state.message && <div className="alert alert-success">
                    {this.state.message}
                </div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Done</th>
                                <th>TargetDate</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(todo =>
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td><button className="btn btn-success" onClick={() => this.UpdateToClicked(todo.id)}> Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteToClicked(todo.id)}> Delete</button></td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ListToDo