import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom';
import Header from './HeaderComponent ';
import ListToDo from './ListToDo';
import AuthenticationService from './Authencat';
import AuthenticatedRoute from './AuthenticatedRoute';
import Welcome from './Welcom'
import TodoComponent from './TodoComponent'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
              
                <Router>
                      <Header/>
                    <Switch>
                        <Route path="/login" component={LoginComp}/>
                        <Route path="/" exact component={LoginComp}/>
                        <AuthenticatedRoute path="/welcome/:name" component={Welcome}/>
                        <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListToDo}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>

                        <Route component={ErrorCom}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
                
                {/*<LoginComp />
                <Welcome/>*/}
            </div>
        );
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.
                </div>
            </>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2020 @nikhil</span>
            </footer>
        )
    }
}


function ErrorCom(){
    return <div> Error you are loading wrong url....</div>
}


class LoginComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'nikhil',
            password: 'nikhil',
            loginFail: false,
            showMsg: false
        }
        this.handelChange = this.handelChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

        // this.handelChangeUser = this.handelChangeUser.bind(this)
        // this.handelChangePass=this.handelChangePass.bind(this)
    }
    render() {
        return (
            <div>
            <h1>Login</h1>
            <div className="container">
                {/*<ShowInvalidCredentials loginFail={this.state.loginFail}/>*/}
                {this.state.loginFail && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showMsg && <div>Login Sucessful</div>}
                {/*<ShowLoginSuccessMessage showMsg={this.state.showMsg}/>*/}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handelChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handelChange} />
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
        </div>
        );
    }

    handelChange(event) {
        //  console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked() {
        // if (this.state.username === 'nikhil' && this.state.password === 'nikhil') {
        //     //console.log('login')
        //     AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password);
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     this.setState(
        //         {
        //             showMsg: true,
        //             loginFail: false

        //         }
        //     )
        // }

        // else {
        //     // console.log('fail')
        //     this.setState({
        //         showMsg: false,
        //         loginFail: true
        //     })

        // }
        AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password)
                this.props.history.push(`/welcome/${this.state.username}`)
            }).catch(() => {
                this.setState({ showMsg: false })
                this.setState({ loginFail: true })
            })
    }


    // handelChangeUser(event) {
    //     console.log(event.target.value)
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

    // handelChangePass(event) {
    //     console.log(event.target.value)
    //     this.setState({
    //         password: event.target.value
    //     })
    // }
}

// function ShowInValid(props) {
//     if (props.loginFail) {
//         return <div> Invalid</div>
//     }else{
//         return null
//     }
   
// }

// function ShowValid(props) {
//     if (props.showMsg) {
//         return <div> Login</div>
//     }else{
//         return null
//     }
    
// }


export default TodoApp