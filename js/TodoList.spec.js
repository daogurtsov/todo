/**
 * Created by dao on 18/01/2017.
 */
/* eslint-env node, jest */
import React from 'react'
import {Provider} from 'react-redux'
import  {TodoList as UnwrappedTodoList} from './TodoList'
import TodoList from './containers'
import {createStore} from 'redux'
import reducer from './reducer'
import {addTodo} from './actions'
import {shallow, render} from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'
import preload from '../public/data.json'
import {List, Map} from 'immutable'

const todos = List(preload.map(todo => Map(todo)))

const store = createStore(reducer)

test('TodoList snapshot', () => {
  const component = shallow(<UnwrappedTodoList todos={todos} />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('TodoList render all todos', () => {
  const component = render(<UnwrappedTodoList todos={todos} />)
  expect(todos.size).toEqual(component.find('.todo__list li').length)
})

test('Should render with Provider wrapper', () => {
  store.dispatch(addTodo('hehe'))
  store.dispatch(addTodo('hehe2'))
  const component = render(<Provider store={store}><TodoList /></Provider>)
  expect(component.find('.todo__list li').length).toEqual(2)
})
