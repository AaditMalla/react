import React, { Component } from 'react'
import { GridColumn,DataGrid } from 'rc-easyui';
import axios from 'axios';
export class Axios extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data: [] 
        }
    }

    componentDidMount(){
        let api = 'https://jsonplaceholder.typicode.com/comments'
        axios.get(api)
        .then((response)=>{
            console.log(response);
            this.setState({
                data: response.data
            })
        }).catch((error)=>{
            console.log(error)
        })
        
    }
    
    render() {
        return (
            <div>
                 <DataGrid data={this.state.data} style={{height:250}}>
                    <GridColumn field="id" title="Id"></GridColumn>
                    <GridColumn field="name" title="Name"></GridColumn>
                    <GridColumn field="email" title="Email" align="right"></GridColumn>
                    
                 </DataGrid>
            </div>
        )
    }
}

export default Axios
