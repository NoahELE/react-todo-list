import { Component, ReactElement } from 'react';
import './index.css';

interface isProps {
  key: string;
  id: string;
  content: string;
  checked: boolean;
}

// eslint-disable-next-line react/prefer-stateless-function
export default class Item extends Component<isProps> {
  clickCheckbox = () => {
    console.log('object');
  };

  render(): ReactElement {
    const { content, checked } = this.props;
    return (
      <li>
        <input type="checkbox" checked={checked} onChange={this.clickCheckbox} />
        <span>{content}</span>
        <button type="button" className="btn btn-danger" style={{ display: 'none' }}>
          delete
        </button>
      </li>
    );
  }
}
