/**
 * Created by dao on 15/01/2017.
 */
import React from 'react'
import Todo from './Todo'
import {List} from 'immutable'

const {func, instanceOf} = React.PropTypes

export class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.render = this.render.bind(this)
    this.toggleClick = this.toggleClick.bind(this)
  }

  onSubmit(event) {
    const {addTodo} = this.props
    const input = event.target
    const text = input.value
    const isEnterKey = (event.which == 13)
    const isLongEnough = text.length > 0

    if (isEnterKey && isLongEnough) {
      input.value = ''
      addTodo(text)
    }
  }

  toggleClick(id) {
    const {toggleTodo} = this.props;
    return event => toggleTodo(id)
  }

  render() {
    return (
      <div className='todo'>
        <input type='text'
          className='todo__entry'
          placeholder='Add todo'
          onKeyDown={this.onSubmit} />
        <ul className='todo__list'>
          {this.props.todos.map(t => (
            <li key={t.get('id')}
              className='todo__item'
              onClick={this.toggleClick(t.get('id'))}>
              <Todo todo={t.toJS()} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

TodoList.propTypes = {
  addTodo: func,
  toggleTodo: func,
  todos: instanceOf(List)
}


