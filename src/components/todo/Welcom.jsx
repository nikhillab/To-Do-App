import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService'
class Welcome extends Component {
    constructor(probs) {
        super(probs)
        this.state = {
            welcomeMessage: ''
        }
        this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this)
        this.handelResponse = this.handelResponse.bind(this)
        this.handleError = this.handleError.bind(this)

    }
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.
                    You can manage your todos <Link to="/todos">here</Link>.
                </div>
                <div className="container">
                    Click hear to get customize welcome message.
                    <button onClick={this.retriveWelcomeMessage}
                        className="btn btn-success">GetMessage</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        );
    }
    retriveWelcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        // .then(response=>this.handelResponse(response)
        // )

        // HelloWorldService.executeHelloWorldBeanService()
        // .then( response => this.handelResponse(response) )

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handelResponse(response))
            .catch(error => this.handleError(error))
    }

    handelResponse(response) {
        this.setState({
            welcomeMessage: response.data.message
        })
    }

    handleError(error) {
        console.log(error.response)
        this.setState({ welcomeMessage: error.response.data.message })
    }
}

export default Welcome