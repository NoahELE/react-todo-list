import { ReactElement } from 'react';
import { Todo } from '../../App';
import Item from '../Item';
import './index.css';

interface IsProps {
  todos: Todo[];
  checkTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export default function List(props: IsProps): ReactElement {
  const { todos, checkTodo, deleteTodo } = props;
  const todoArr: Todo[] = [];
  todos.forEach((value) => {
    todoArr.push(value);
  });
  return (
    <ul className="todo-main">
      {todoArr.map((todo) => {
        return <Item key={todo.id} checkTodo={checkTodo} deleteTodo={deleteTodo} {...todo} />;
      })}
    </ul>
  );
}
