import { Input } from '../components/ui/Input/Input'
import { Button } from '../components/ui/Button/Button'
import { Card } from '../components/ui/Card/Card'
import { useState } from 'react'
import done from '../assets/icons/done.svg'
import close from '../assets/icons/close.svg'
import { toUpperCase } from '../utils/toUpperCase'

export const Todos = () => {
  const [value, setvalue] = useState('')
  const [todos, setTodos] = useState([])

  const newTodo = (e) => setvalue(e.target.value)

  const addTodos = (e) => {
    if (e.key === 'Enter' || e.button === 0) {
      if (value.trim()) {
        setTodos([...todos, { title: toUpperCase(value), isSuccess: false }])
        setvalue('')
      }
    }
  }

  const selectTodo = (selectIndex) => {
    const updatedTodos = [...todos]
    updatedTodos[selectIndex].isSuccess = true
    setTodos(updatedTodos)
  }

  return (
    <main className="p-2">
      <div className="flex justify-center gap-2">
        <Input onKeyDown={addTodos} value={value} onChange={newTodo} />
        <Button title="Add" color="primary" onClick={addTodos} />
      </div>
      <div className="mt-10">
        {todos.map((todo, index) =>
          todo.isSuccess === true ? (
            <Card
              icon={done}
              color="success"
              id={index + 1}
              isDone={true}
              key={index}
              title={todo.title}
            />
          ) : null
        )}
      </div>
      <div className="mt-10">
        {todos.map((todo, index) =>
          todo.isSuccess === false ? (
            <Card
              icon={close}
              id={index + 1}
              onSelect={() => selectTodo(index)}
              key={index}
              title={todo.title}
            />
          ) : null
        )}
      </div>
    </main>
  )
}
