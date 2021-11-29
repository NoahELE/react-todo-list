import { ChangeEventHandler, Component, ReactElement } from 'react';
import { Todo } from '../../App';
import './index.css';

interface IsProps {
  todos: Todo[];
  checkAllTodo: (flag: boolean) => void;
  clearAllFinished: () => void;
}

export default class Footer extends Component<IsProps> {
  handleCheckAll: ChangeEventHandler<HTMLInputElement> = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };

  handleClearAllFinished = () => {
    this.props.clearAllFinished();
  };

  render(): ReactElement {
    const { todos } = this.props;
    const complete = todos.reduce((prev, curr) => prev + (curr.checked ? 1 : 0), 0);
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={total !== 0 ? complete === total : false}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          complete {complete} / total {total}
        </span>
        <button type="button" className="btn btn-danger" onClick={this.handleClearAllFinished}>
          clear all finished
        </button>
      </div>
    );
  }
}
