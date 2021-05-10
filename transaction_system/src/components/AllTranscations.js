import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'


class AllTranscations extends React.Component {
    deletePost=(id)=>{
        console.log(id)
        let posts=this.props.posts.filter(post=>{
          return post.id!==id
        })
        
       this.props.delPost(posts)
      }
    render(){
        const {posts}=this.props
        var newPosts=posts.sort((a, b) => a - b).reverse()
        const postList=newPosts.length?(
           newPosts.map((post,index)=>{
                return (
                    <tr onClick={()=>{this.deletePost(post.id)}}>
                    <th key={post.id}>{post.date}</th>
                    <td>{post.description}</td>
                    <td>{post.credit}</td>
                    <td>{post.debit}</td>
                    <td>{post.amount}</td>
                  </tr>
                )
            })
            )
        :(
           <div className="center">no connections to show!!!</div> 
        )
        return (
            <div class="container mt-10 "style= {{position:"absolute", left:30,top:80}}>
             <div className="row">
             <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Office Transactions</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"><Link to="/newpost">Add Transaction</Link></th>  
                </tr>
                <tr>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col">Credit</th>
                <th scope="col">Debit</th>
                <th scope="col">Running Balance</th>
                </tr>
            </thead>
            <tbody>
                {postList}
            </tbody>
            </table>
            </div> 
             
            </div>
          );
    }
 
}

const mapStateToProps = state => {
    console.log(state.posts)
    return {
        posts: state.posts
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        delPost:(data)=>dispatch({type:"DEL_POST" ,data})
    }
}

export default connect(mapStateToProps,mapStateToDispatch)(AllTranscations );