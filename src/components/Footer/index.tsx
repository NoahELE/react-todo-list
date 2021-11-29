import { Component, ReactElement } from 'react';
import './index.css';

export default class Footer extends Component {
  state = {
    complete: 0,
    total: 0,
  };

  render(): ReactElement {
    const { complete, total } = this.state;
    return (
      <div className="todo-footer">
        <label className="todo-footer">
          <input type="checkbox" />
          <span>
            completed {complete} / {total}
          </span>
        </label>
        <button type="button" className="btn btn-danger">
          clear all tasks
        </button>
      </div>
    );
  }
}
