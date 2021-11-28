/* eslint-disable jsx-a11y/label-has-associated-control */
import { Component, ReactElement } from 'react';

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
      </label>
    );
  }
}
