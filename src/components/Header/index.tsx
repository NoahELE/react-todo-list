import { Component, KeyboardEventHandler, ReactElement } from 'react';
import { nanoid } from 'nanoid';
import { Todo } from '../../App';
import './index.css';

interface isProps {
  addTodo: (newTodoObj: Todo) => void;
}

export default class Header extends Component<isProps> {
  handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter' && event.currentTarget.value.trim() !== '') {
      const { addTodo } = this.props;
      addTodo({ id: nanoid(), content: event.currentTarget.value, checked: false });
      event.currentTarget.value = '';
    }
  };

  render(): ReactElement {
    return (
      <div className="todo-header">
        <input type="text" placeholder="enter your tasks here, click Enter to add" onKeyUp={this.handleKeyUp} />
      </div>
    );
  }
}
