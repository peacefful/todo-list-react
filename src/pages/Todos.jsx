import done from '@/assets/icons/done.svg'
import close from '@/assets/icons/close.svg'
import { Input } from '@/components/ui/Input/Input'
import { Button } from '@/components/ui/Button/Button'
import { Card } from '@/components/ui/Card/Card'
import { toUpperCase } from '@/utils/toUpperCase'
import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

export const Todos = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = (await axios.get(BASE_URL)).data
        setTodos(data)
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    }
    fetchTodos()
  }, [])

  const newTodo = (e) => setValue(e.target.value)

  const addTodos = async (e) => {
    if (e.key === 'Enter' || e.button === 0) {
      if (value.trim()) {
        const newTodos = { title: toUpperCase(value), isSuccess: false }

        await axios.post(BASE_URL, newTodos)
        setTodos([...todos, newTodos])
        setValue('')
      }
    }
  }

  const selectTodo = async (selectIndex, id) => {
    const updatedTodos = [...todos]
    updatedTodos[selectIndex].isSuccess = true

    await axios.put(`${BASE_URL}/${id}`, updatedTodos[selectIndex])

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
          todo.isSuccess ? (
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
          !todo.isSuccess ? (
            <Card
              icon={close}
              id={index + 1}
              onSelect={() => selectTodo(index, todo.id)}
              key={index}
              title={todo.title}
            />
          ) : null
        )}
      </div>
    </main>
  )
}
