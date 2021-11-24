import React, { Component } from 'react'
import { Form,FormField,TextBox } from 'rc-easyui';
import axios from 'axios';
export class FormTest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userid: '',
             title: '',
             body: ""
        }
    }
    
    handleSubmit = (e)=>{
        e.preventDefault();
        let api = "https://jsonplaceholder.typicode.com/posts"
        axios.post(api, this.state)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    handleChange = (e)=> {
        
        this.setState({ [e.target.name]: e.target.value })
      }

    render() {
        return (
            <div>
               <form action="" onSubmit = {this.handleSubmit}>
                   <input type="text" name = "userid" value = {this.state.userid} onChange={this.handleChange}/>
                   <input type="text" name = 'title' value = {this.state.title}/>
                   <input type="text" name = 'body' value = {this.state.body}/>
                   <button type="submit">Submit</button>
               </form>
              
            </div>
        )
    }
}

export default FormTest
