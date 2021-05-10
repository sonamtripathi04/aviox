import React from 'react';
import { connect } from 'react-redux';

class NewTransaction extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:"",
        }
    }
    inputChange = (e)=> {
        let id=Math.random()
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        this.setState ({
            [e.target.id]: e.target.value,
            id:id,
            date:today
        }, console.log(this.state))
    }
       
    formSubmit = (e) => {
        e.preventDefault()
        this.props.addPost(this.state)
        this.props.history.push('/')
    }
  render() { 
      return (
      <div className="container">
        <h5 className=" mt-3">New Transactions</h5>
                <hr/>
                <form onSubmit={this.formSubmit}>
                <div  className="row">
                <div className="form-group col-md-4 offset-md-4">
                <p><select name="status"  class="form-control">
                <option value="" disabled="" selected="">Transaction type</option>
                <option id="credit" value="yes">Credit</option>
                <option id="debit" value ="yes">Debit</option>
                </select>
                </p>
                </div> 
                </div>   
                <div  className="row">
                    <div className="form-group col-md-4 offset-md-4">
                      <label htmlFor="description" >Amount </label>
                     <textarea name="amount" id="amount" className="form-control" onChange={this.inputChange}/>
                    </div>
                </div>
                <div  className="row">
                    <div className="form-group col-md-4 offset-md-4">
                      <label htmlFor="description" > Description </label>
                     <textarea name="description" id="description" className="form-control" onChange={this.inputChange}/>
                    </div>
                </div>
                
                <div className="row ml-5 pl-3">
                   <button type="submit" className="btn btn-primary  offset-md-5">Submit</button>
                </div>
                </form>
        </div>
    )
  }
  };
  const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        addPost:(data)=>dispatch({type:"ADD_POST" ,data})
    }
}



export default connect(mapStateToProps,mapStateToDispatch)(NewTransaction)