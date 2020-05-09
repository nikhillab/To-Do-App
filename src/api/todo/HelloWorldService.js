import axios from 'axios'
class HelloWorldService {
    executeHelloWorldService() {
        return axios.get('http://localhost:8085/hello-world');
    }

    executeHelloWorldBeanService() {
        //console.log('executed service')
        return axios.get('http://localhost:8085/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name) {
        console.log('executed service')
        // let username = 'user'
        // let password = 'nikhil'

        // let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

        return axios.get(`http://localhost:8085/hello-world/path-variable/${name}`)
        //     , 
        //         {
        //             headers : {
        //                 authorization: basicAuthHeader
        //             }
        //         }
        // );
    }
}
export default new HelloWorldService()
