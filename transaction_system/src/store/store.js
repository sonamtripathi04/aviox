import {createStore,combineReducers} from 'redux'
import postsReducer from './reducers/postsReducer'

const reducers =combineReducers({
    posts:postsReducer,
})


const store = createStore(reducers)

store.subscribe(() => {
    console.log('state:' ,store.getState())
})

export {store}