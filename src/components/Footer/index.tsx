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
      <label>
        <input type="checkbox" />
        <span>
          completed {complete} / {total}
        </span>
        <button type="button">clear all tasks</button>
      </label>
    );
  }
}
