/**
 * Created by dao on 17/01/2017.
 */
/* eslint-env node, jest */
import reducer from './reducer'
import {List, Map} from 'immutable'

test('ADD_TODO', () => {
  let state
  state = reducer(List([]), {type: 'ADD_TODO', payload: {id: '12345', isDone: false, text: 'orange'}})
  console.log(state);
  expect(state.toJS()[0]).toEqual({"id":"12345","isDone":false,"text":"orange"})
})

test('TOGGLE_TODO', () => {
  let state
  state = reducer(List([]), {type: 'ADD_TODO', payload: {id: '12345', isDone: false, text: 'orange'}})
  state = reducer(state, {type: 'TOGGLE_TODO', payload: '12345'})
  expect(state.toJS()[0].isDone).toEqual(true)
})
