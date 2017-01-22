import React from 'react'
import {connect} from 'react-redux'
import {addTodo, toggleTodo} from './actions'
import {TodoList} from './TodoList'

const mapStateToProps = (state) => {
  return {todos: state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: text => dispatch(addTodo(text)),
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
