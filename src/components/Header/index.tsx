/* eslint-disable react/prefer-stateless-function */
import { Component, ReactElement } from 'react';

export default class Header extends Component {
  render(): ReactElement {
    return <input placeholder="enter your tasks here, click Enter to add" />;
  }
}
