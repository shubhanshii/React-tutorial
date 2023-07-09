import logo from './logo.svg';
// import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Message from './components/Message';
import { Component } from 'react';
import Counter from './components/Counter';
import FunctionClick from './components/FunuctionClick'
import ClassClick from './components/ClassClick'
import Stylesheet from './components/Stylesheet';
import './App.css'
import Form from './components/Form';
import Hero from './components/Hero';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
class App extends Component {
  render() {
  return (
     <div className="App">
      <HookCounterThree></HookCounterThree>
      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <HookCounter></HookCounter> */}
      {/* <ClassCounter></ClassCounter> */}
    {/* //   <Hero heroName="Batman"></Hero>
    //   <Hero heroName="Superman"></Hero>
    //   <Hero heroName="Joker"></Hero> */}
      {/* <Form></Form> */}
      {/* <Stylesheet primary={true}></Stylesheet> */}
      {/* <FunctionClick></FunctionClick> 
      <ClassClick></ClassClick> */}
     
      {/* <Counter></Counter> */}
      {/* <Message></Message> */}
      {/* <Greet name="Bruce" heroName="Batman"/>
      <Greet name="Clark" heroName="Superman"/>
      <Greet name="Diana" heroName="Wonder Woman"/> */}
      {/* <Welcome></Welcome> */}
    </div>
  );
  }
}

export default App;
