let postsArr=[
    {
    "userId": 1,
    "id": 1,
    "date": "02/20/2020",
    "description": "Misc Expenses",
    "credit":"",
    "debit":" 3000" ,
    "amount":"1215"
  },
  {
    "userId": 1,
    "id": 2,
    "date": "02/18/2020",
    "description": "Printing sheets for office documents",
    "credit":"",
    "debit":" 285" ,
    "amount":"4500"

  },
  {
    "userId": 1,
    "id": 3,
    "date": "02/18/2020",
    "description": "Snacks Party",
    "credit":"",
    "debit":" 500" ,
    "amount":"4215"
  },
  {
    "userId": 1,
    "id": 4,
    "date": "02/17/2020",
    "description": "Credited to Office Account",
    "credit":"5000",
    "debit":" " ,
    "amount":"5000"
  }
]
const postsReducer = (posts=postsArr, action) => {
    if(action.type === 'ADD_POST'){
    posts = posts.concat(action.data)
    }
    if(action.type === 'DEL_POST'){
        posts = action.data
    }
    return posts
}

export default postsReducer