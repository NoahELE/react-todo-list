import { Component, ReactElement } from 'react';
import { Todo } from '../../App';
import Item from '../Item';
import './index.css';

// interface isState {
// itemArr: Item[];
// }

interface isProps {
  todos: Todo[];
}

// eslint-disable-next-line react/prefer-stateless-function
export default class List extends Component<isProps, unknown> {
  render(): ReactElement {
    const { todos } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => (
          <Item key={todo.id} {...todo} />
        ))}
      </ul>
    );
  }
}
