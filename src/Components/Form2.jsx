import React, { Component } from 'react'
import axios from 'axios'
export class Form2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userid: '' ,
            title: '',
            body: ""
        }
    }

    changeHandler = (e)=>{
        
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e)=>{
        let api = "https://jsonplaceholder.typicode.com/posts"
        e.preventDefault();
        axios.post(api,this.state)
        .then((response)=>{

            console.log(response)
            this.setState({
                userid: '' ,
            title: '',
            body: ""
            })

        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit= {this.submitHandler} >
                        <input name="userid" value={this.state.userid} onChange={this.changeHandler}></input>
                        <input name="title" value={this.state.title} onChange={this.changeHandler}></input>
                        <input name="body" value={this.state.body} onChange={this.changeHandler}></input>
                        <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form2
