import { Component, ReactElement } from 'react';
import Item from '../Item';

interface isState {
  itemArr: Item[];
}

export default class List extends Component<unknown, isState> {
  state = {
    itemArr: [],
  };

  render(): ReactElement {
    const { itemArr } = this.state;
    return <ul>{itemArr}</ul>;
  }
}
