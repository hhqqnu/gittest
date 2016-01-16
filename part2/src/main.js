// import Greeting from './Greeting.js';
// import DateTime from './DateTime.js';
//
// var h1 = document.querySelector('h1');
// h1.textContent = new Greeting();
//
// var h2 = document.querySelector('h2');
// h2.textContent = new DateTime();

// const message = () => {
//   return "Hello world";
// }
// console.log(message());

// import React from 'react';
//
// const App = React.createClass({
//   render(){
//     return <div>Hello from React!</div>
//   }
// });
//
// React.render(<App/>,document.getElementById('div1'));

// import React from 'react';
//
// class App extends React.Component{
//   render(){
//     return <div>Hello from es6!</div>
//   }
// }
// React.render(<App/>,document.getElementById('div1'));


// import React from 'react';
// import ReactDom from 'react-dom';
//
//
// class App extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1>hello from es6!</h1>
//       </div>
//     );
//   }
// }
//
// ReactDom.render(<App/>,document.getElementById('div1'));


// import React from 'react';
// import ReactDom from 'react-dom';
// import Logger from './components/Logger';
//
// class App extends Logger{
//   componentWillMount(){
//     super.componentWillMount();
//     console.log('App logging');
//   }
//   render(){
//     return (
//       <div><h1>Hello From ES</h1></div>
//     );
//   }
// }
// ReactDom.render(<App/>,document.getElementById('div1'));
import React from 'react';
import ReactDom from 'react-dom';

import Greeting from './Greeting';
import DateTime from './DateTime';

class Counter extends React.Component{
    constructor(props){
      super();
      // this.state = { count:0 };
      this.state = {
        count: props.initialCount,
        greeting:new Greeting(),
        dt:new DateTime()
      };
    }

    incrment(){
      this.setState({ count:this.state.count+1 });
      //console.log(this.state.greeting.toString(),this.state.dt.toString());
    }

    render(){
      return (
        <div>
          <div>Count value:{this.state.count}</div>
          <button onClick={this.incrment.bind(this)}>Incrment</button>
          <button onClick={this.state.greeting.show.bind(this)}>other class call method</button>
          <button onClick={this.state.greeting.show.bind(this.state.greeting)}>other class call method prototype</button>
        </div>
      );
    }
}

Counter.defaultProps={initialCount:0};


// ReactDom.render(<Counter initialCount="10"/>,document.getElementById('div1'));
ReactDom.render(<Counter />,document.getElementById('div1'));
