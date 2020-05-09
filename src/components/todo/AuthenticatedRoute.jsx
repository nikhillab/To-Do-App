import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from './Authencat';

class AuthenticatedRoute extends Component {
    render(){
        if(AuthenticationService.isUserLogin()){
           return  <Route {...this.props}/>
        }
        else{
            return <Redirect to="/login"/>
        }
    }

}
export default AuthenticatedRoute