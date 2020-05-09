import axios from 'axios'
class AuthenticationService {

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    executeBasicAuthenticationService(username, password) {
        return axios.get(`http://localhost:8085/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }


    registerSuccessfullLogin(username, password) {
        //console.log('registerSuccessfullLogin')

        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));

    }
    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }
    isUserLogin() {

        let user = sessionStorage.getItem('authenticatedUser')
        //console.log(user)

        if (user === null) {
            // console.log('false')

            return false;
        }
        //console.log('true')

        return true;
    }

    getLoggedInUsername() {

        let user = sessionStorage.getItem('authenticatedUser')
        //console.log(user)

        if (user === null) {
            // console.log('false')

            return "";
        }
        //console.log('true')

        return user;
    }

    setupAxiosInterceptors(basicAuthHeader) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLogin()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}
export default new AuthenticationService()