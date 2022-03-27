import React from 'react'
import Todo from './Todo'

const Todos = ({todos, ToggleTodo}) => {
  return (
    todos.map(todo => {
        return <Todo key={todo.id} todo={todo} ToggleTodo={ToggleTodo} />
    })
  )
}

export default Todos