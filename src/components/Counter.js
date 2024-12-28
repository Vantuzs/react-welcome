import React from "react";


class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            shag: 1
        };
    }

    increment(){
        // todo: state.cout++;
        this.setState({
            count: this.state.count + this.state.shag
        })
    }

    decrement(){
        if(this.state.count < this.state.shag){
            return this.setState({
                count: this.state.count = 0
            })
        }else{
        this.setState({
           count: this.state.count - this.state.shag
        })}
    }

    upShag(){
        if(this.state.shag >=5){
            this.setState({
                shag: this.state.shag = 1
            })
        }else{
            this.setState({
                shag: this.state.shag + 1
            })
        }
    }

    render(){
        const h2 = React.createElement('h2',{},this.state.count);
        const shagVui = React.createElement('h2',{},this.state.shag,' шаг');
        const btn = React.createElement('button',{onClick: ()=>{this.increment()}},'+');
        const btnMin = React.createElement('button',{onClick: ()=>{this.decrement()}},'-');
        const btnVal = React.createElement('button',{onClick: ()=>{this.upShag()}},'+1shag')
        return React.createElement(React.Fragment,{},h2,shagVui,btn,btnMin,btnVal);
    }
}

export default Counter;