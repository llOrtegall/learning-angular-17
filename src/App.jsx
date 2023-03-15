export const App = () => {

  function TodoItem() {
    return (
      <li>
        <span>V</span>
        <p>llorar con la llorona</p>
        <span>X</span>
      </li>
    )
  }

  function TodoCounter() {
    return (
      <h1> has completado 3 de 5 TODOs</h1>
    )
  }

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </>
  )
}
