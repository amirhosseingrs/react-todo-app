import React from 'react'

const Todo = ({todo, ToggleTodo}) => {

  const CheckedHandler = () => {
    ToggleTodo(todo.id)
  }

  return (
    <>
      <label>
        <input type="checkbox" defaultChecked={todo.completed} onChange={CheckedHandler} />
        {todo.name}
      </label>
      <br />
    </>
  )
}

export default Todo