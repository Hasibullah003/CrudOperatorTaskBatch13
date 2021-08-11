import axios from 'axios'
import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColorIcon from '@material-ui/icons/BorderColor';

export default class Accounts extends Component {
    state={
        Accounts:[],
        show:false,
        user:"",
        update:false,

    } 
    // get data
    componentDidMount() {
        console.log(" ")
        axios.get(`https://fir-crudagain-default-rtdb.firebaseio.com/Accounts.json`).then((res)=>{
        let fetchAccounts=[]
          for(const key in res.data)
          {
              fetchAccounts.push({
                  id:key,
                  ...res.data[key]
              })
          }
          console.log(fetchAccounts)
          this.setState({
              Accounts:fetchAccounts
          })
        }).catch((err)=>{
            console.log(err)
        })
    }


// delete operation
handleDelete = (Account) =>{
 axios.delete(`https://fir-crudagain-default-rtdb.firebaseio.com/Accounts/${Account.id}.json`).then((resp)=>{
   console.log("delete")

   const updateAccounts = this.state.Accounts.filter((acc)=>{
     return acc.id !== Accounts.id ? acc : null;
   })
   this.setState({
     Accounts:updateAccounts,
   })
 }).catch((err)=>{
   console.log(err)
 })
}
 
// update operation

    handleClose=()=>{
      this.setState({
        show:false
      })
    }

    handleChange =(e)=>{
      this.setState({
          [e.target.name]: e.target.value
      })
  }
updateRecord =(acc) =>{
  const {designation,company,workingfrom,id} =acc;
  this.setState({
   id:id,
    designation:designation,
    company:company,
    workingfrom:workingfrom,
    
    show:true
  })
}

updateAccounts =()=>
{
  const url =`https://fir-crudagain-default-rtdb.firebaseio.com/Accounts/${this.state.id}.json`
  const {designation,company,workingfrom}=this.state
  const Account ={
    designation:designation,
    company:company,
    workingfrom:workingfrom
    
  
  }
  axios.put(url,Account).then((res)=>{
    console.log(res.status);
    this.setState({
      show:false
    })
  }).catch((err)=>{
    console.log(err)
    
  })
}
    
    render() {
        return (    
            <>            
                        <div  className="card bs-white text-center" style={{padding:'30px',width:'100%',height:'665px'}}>
                        <table className=" table">
                        <thead  >
                          <tr>
                            <th scope="col">SL.No</th>
                            <th scope="col">Certification Name</th>
                            <th scope="col">Certified From</th>
                            <th scope="col">Year of Completion</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>

                          </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.Accounts.map((data,index)=> {
                                return (
                                    <tr>
                                    <td>{index+1}</td>
                                    <td>{data.designation}</td>
                                    <td>{data.company}</td>
                                    <td>{data.workingfrom}</td>

                                   
                                  <td> <BorderColorIcon  onClick={()=>{
                                    this.updateRecord(data)
                                    }}/></td>
                                    <td>   <DeleteIcon onClick={()=>{this.handleDelete(data)}}/></td>
                                    </tr>
                                )   
                            })
                        }
                        </tbody>
                      </table>

<Modal show={this.state.show} 
animation={false}
onHide={this.handleClose} >
  <Modal.Header closeButton>
    <Modal.Title>Certification</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <div className="container" >
<form onSubmit={this.handleSubmit} >
<div className="form-group">
 <label ntmlfor="designation">Certification Name</label>
    <input type="text" className="form-control" id="designation" name="designation" value={this.state.designation} onChange={this.handleChange} placeholder="designation" />
</div>
<div className="form-group">
 <label ntmlfor="company">Certified From</label>
    <input type="text" className="form-control" id="company" name="company" value={this.state.company} onChange={this.handleChange} placeholder="company" />
</div>
<div className="form-group">
 <label ntmlfor="working from">Year of Completion</label>
    <input type="text" className="form-control" id="workingfrom" name="workingfrom" value={this.state.workingfrom} onChange={this.handleChange} placeholder="working from" />
</div>

   </form>
</div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={this.handleClose} >Close</Button>
    <Button variant="primary" onClick={this.updateAccounts} >Add</Button>
  </Modal.Footer>
</Modal>

 </div>
 </>
        );
    }
}