import './TodoList.css';
import TodoItem from '../TodoItem';

function TodoList() {
  return (
    <section>
      <h2>To Do List</h2>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </section>
  );
}

export default TodoList;
