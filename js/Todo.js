import React from 'react'
const {object, shape, string, boolean} = React.PropTypes


const Todo = (props) => {
  const {todo} = props
  if (todo.isDone) {
    return <strike>{todo.text}</strike>
  } else {
    return <span>{todo.text}</span>
  }
}

Todo.propTypes = {
  todo: shape({
    id: string,
    isDone: boolean,
    text: string
  })
}

export default Todo
