import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateBottomn } from './CreateBottomn'
import './App.css'

export const App = () => {
  return (
    <>
      <TodoCounter complete={3} total={5} />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateBottomn />
    </>
  )
}
