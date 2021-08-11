import axios from 'axios'
import React, { Component } from 'react'

export default class Register extends Component {

    state={
        designation:""
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    handleSubmit = (e)=>{
        e.preventDefault()
        const acc ={...this.state};
        console.log(this.state)
        const url=`https://fir-crudagain-default-rtdb.firebaseio.com/Accounts.json`;
        axios.post(url,acc).then((resp)=>{
            if(resp.status === 200)
            {
     this.props.history.push("/show");
                this.setState({
                   designation:""
                });
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
               <div className="card text-white bg-secondary text-center" style={{padding:'20px',width:'100%',height:'665px'}} >
                <div  className="container col-4">
                       <h1>Certification</h1>
                  <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                      <label ntmlfor="designation">Certification Name</label>
                         <input type="text" className="form-control" id="designation" name="designation" value={this.state.designation} onChange={this.handleChange} placeholder="Certification Name" />
                     </div>
                    <div className="form-group">
                      <label ntmlfor="company">Certified From</label>
                         <input type="text" className="form-control" id="company" name="company" value={this.state.company} onChange={this.handleChange} placeholder="Certified From" />
                     </div>
                        <div className="form-group">
                      <label ntmlfor="working from">Year of Completion</label>
                         <input type="text" className="form-control" id="workingfrom" name="workingfrom" value={this.state.workingfrom} onChange={this.handleChange} placeholder="Year of Completion" />
                     </div>
                      
                         <button  type="submit" class="btn btn-primary">Add</button>
                        </form>
                  </div>
                  </div> 


        )
    }
}