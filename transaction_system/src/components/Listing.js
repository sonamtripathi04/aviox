import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';


function Table() {
    const [allTalks, setallTalks] = useState([])
    const [pageNo, setPageNo] = useState(0)

    useEffect(() => {
        setInterval(async()=>{fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=1`)
          .then(res => {
          return res.json()
          })
          .then(res => {
            setallTalks([...res.hits])
            console.log(res.hits)
           
          })
          .catch(err => {
              console.log(err)
          })},10000)
    },[])

    const next = () => {
        setallTalks([])
        setPageNo(pageNo + 1)
        fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=1`)
        .then(res => {
          return res.json()
        })
        .then(res => {
    
            setallTalks([...res.hits])
            console.log(res.hits)
        })
        .catch(err => {
          console.log(err)
        })
      }

      let talks=[]
      talks=allTalks.slice(5*pageNo,5*(pageNo+1)) 
  return (
    <div className="container">
      {talks.length > 0 ?
      <div>
       <table className="table table-hover ">
        <thead>
          <tr>
            <th>Author</th>
            <th>Title</th>
            <th>Published Date</th>
            <th>Tags</th>
            <th>More Details</th>
          </tr>
        </thead>
        
         {talks.map((item, index) => 
   
          <tbody key={index}> 
          
          <tr id={item.objectID}>
            <td>{item.author}</td>
            <td>{item.title}</td>
            <td>{moment(item.created_at).format("DD-MM-YYYY")}</td>
            <td>{item._tags.map((tag,i)=>{
                <li key={i}>{tag}</li>
            })}</td>
            <td><Link to={item.url}>More Details..</Link></td>
          </tr> 
          </tbody>

        
          )}
      </table>
      {
      <div className="btn-group">
        <button id="next"style={{position:"absolute",top: 200 ,left:350}} onClick={next} className="btn btn-outline-info">
          Next
        </button>
      </div>
      }
      </div>
      : <p className="m-5">Data loading..</p>}
    </div>
  );
}

export default Table;