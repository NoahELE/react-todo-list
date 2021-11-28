/* eslint-disable jsx-a11y/label-has-associated-control */
import { Component, ReactElement } from 'react';

interface isState {
  checked: boolean;
  content: string;
}

export default class Item extends Component<unknown, isState> {
  state = {
    checked: false,
    content: '',
  };

  render(): ReactElement {
    const { checked, content } = this.state;
    return (
      <label>
        <input type="checkbox" checked={checked} />
        <span>{content}</span>
        <span style={{ display: 'none' }}>delete</span>
      </label>
    );
  }
}
