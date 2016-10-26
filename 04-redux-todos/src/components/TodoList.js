import React, {PropTypes} from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onTodoClick }) => (
  // const todos = [{id:'1', completed:false, text: 'Test1'}, {id:'2', completed:true, text: 'Test2'}, {id:'3', completed:false, text: 'Test3'}]
  <ul>
    {todos.map(todo =>
      <TodoItem
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
