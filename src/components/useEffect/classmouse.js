import React, { Component } from 'react';
class ClassMouse extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            x: 0,
            y: 0 
         }
    }
    logMousePositon=e=>{
        this.setState({
            x:e.clientX, y:e.clientY
        })
    }
    componentDidMount(){
        window.addEventListener('mousemove', this.logMousePositon)
    }
    componentWillUnmount(){
        window.removeEventListener('mousemove', this.logMousePositon)
    }
    render() { 
        return (  
            <div> Using class
               X - {this.state.x}
               Y - {this.state.y}
            </div>
        );
    }
}
 
export default ClassMouse;