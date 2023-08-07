import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateBottomn } from './CreateBottomn'
import './App.css'

export const App = () => {
  const defaultTodos = [
    {
      text: 'Cortar Cebolla', completed: true
    },
    {
      text: 'Cortar Tomate', completed: false
    },
    {
      text: 'Cortar Ajo', completed: true
    }
  ]

  return (
    <main className='App'>
      <TodoCounter complete={3} total={5} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            complete={todo.completed}
          />
        ))}
      </TodoList>
      <CreateBottomn />
    </main>
  )
}
