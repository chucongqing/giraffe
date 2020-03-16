import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
  
    tick() {
        this.setState({
          date: new Date()
        });
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }


class Btn extends React.Component {
    render() {
        return (
            <div>
                <h1>hello h1 world!</h1>
            </div>
        )
    }
}


class RenderingExample extends React.Component {
    render() {
        return (

            <div>

            </div>
        );
    }
}


export  {Clock, Btn, RenderingExample};