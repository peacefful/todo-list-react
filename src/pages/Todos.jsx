import { UIInput } from '../components/ui/Input/UIInput'
import { UIButton } from '../components/ui/Button/UIButton'
import { Card } from '../components/ui/Card/Card'
import { useState } from 'react'
import done from '../assets/icons/done.svg'
import close from '../assets/icons/close.svg'
import { toUpperCase } from '../utils/toUpperCase'

export const Todos = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [successTodos, setSuccessTodos] = useState([])

  const newTodo = (e) => setTodo(e.target.value)

  const addTodos = (e) => {
    if (e.key === 'Enter') {
      if (todo.trim()) {
        setTodos([...todos, toUpperCase(todo)])
        setTodo('')
      }
    }
  }

  const selectTodo = (index) => {
    setSuccessTodos([...successTodos, todos[index]])
    return todos.splice(index, 1)
  }

  return (
    <main className="p-2">
      <div className="flex justify-center gap-2">
        <UIInput onKeyDown={addTodos} todo={todo} onChange={newTodo} />
        <UIButton title="Add" color="primary" onClick={addTodos} />
      </div>
      <div className="mt-10">
        {successTodos.map((successTodo, index) => (
          <Card
            isDone={true}
            icon={done}
            color="success"
            key={index}
            id={index}
            title={successTodo}
          />
        ))}
      </div>
      <div className="mt-10">
        {todos.map((todo, index) => (
          <Card
            icon={close}
            onSelect={() => selectTodo(index)}
            key={index}
            id={index}
            title={todo}
          />
        ))}
      </div>
    </main>
  )
}
