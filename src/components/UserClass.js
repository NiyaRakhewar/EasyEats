import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state= {
            count: 0,
            count2: 2
        }
    console.log(props)
    }
    render(){
        const {count, count2} = this.state

        return <div><h1>User Class {this.props.name}</h1><button onClick={()=>{
            this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 + 5
            })
        }}>increase</button>count : {count} - count2 : {count2}</div>
    }
}

export default UserClass