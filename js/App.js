import React from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import  TodoList from './containers'
import reducer from './reducer'

const store = createStore(reducer);

const App = () => {
  return (
    <div className='app'>
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  )
}

export default App
