import React, { Component } from 'react';
import TOdoApp from './components/todo/TodoApp'
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import FirstCom from './components/learning-exm/FirstCom';
import { Second } from './components/learning-exm/Second';
import { ThirdCom, Forth } from './components/learning-exm/Third';
import Counter from './components/Counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Counter />*/}
       <TOdoApp/>
      </div>
    );
  }
}
// class LearnigCom extends Component cd
//   render() {
//     return (
//        <div className="LearnigCom">
//         Hello World
//         <FirstCom></FirstCom>
//         <Second></Second>
//         <ThirdCom></ThirdCom>
//         <Forth></Forth>
//       </div>
//     );
//   }
// }


export default App;