export const TodoItem = (props) => {
  return (
    <li>
      <span>{props.completed}</span>
      <p>{props.text}</p>
    </li>
  )
}
