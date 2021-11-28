import { Component, ReactElement } from 'react';
import { Todo } from '../../App';
import Item from '../Item';
import './index.css';

interface isProps {
  todos: Todo[];
  checkTodo: (id: string) => void;
}

export default class List extends Component<isProps> {
  render(): ReactElement {
    const { todos, checkTodo } = this.props;
    const todoArr: Todo[] = [];
    todos.forEach((value) => {
      todoArr.push(value);
    });
    return (
      <ul className="todo-main">
        {todoArr.map((todo) => {
          return <Item key={todo.id} checkTodo={checkTodo} {...todo} />;
        })}
      </ul>
    );
  }
}
