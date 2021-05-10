import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App";
import AddTransaction from "./components/AddTranscation"
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './store/store'

class TransactionApp extends React.Component{
    render(){
        return(
            <div>
             <Provider store={store}>
              <Router>
              <Route exact path="/" component={App}></Route>
              <Route exact path="/newpost" component={AddTransaction}></Route>
              </Router>
             </Provider>
             </div>
         
        )
    }
}


ReactDOM.render(<TransactionApp />, document.getElementById('root'))