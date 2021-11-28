import { Component, ReactElement } from 'react';
import './index.css';

interface IsProps {
  key: string;
  id: string;
  content: string;
  checked: boolean;
  checkTodo: (id: string) => void;
}

interface IsState {
  mouseIn: boolean;
}

export default class Item extends Component<IsProps, IsState> {
  state = {
    mouseIn: false,
  };

  handleCheck = (id: string) => {
    return () => {
      this.props.checkTodo(id);
    };
  };

  handleMouse = (flag: boolean) => {
    return () => {
      this.setState({ mouseIn: flag });
    };
  };

  render(): ReactElement {
    const { id, content, checked } = this.props;
    const { mouseIn } = this.state;
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: mouseIn ? 'whitesmoke' : 'white' }}
      >
        <input type="checkbox" checked={checked} onChange={this.handleCheck(id)} />
        <span>{content}</span>
        <button type="button" className="btn btn-danger" style={{ display: mouseIn ? 'block' : 'none' }}>
          delete
        </button>
      </li>
    );
  }
}
