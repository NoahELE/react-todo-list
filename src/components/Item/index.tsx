import { Component, ReactElement } from 'react';
import './index.css';

interface IsProps {
  key: string;
  id: string;
  content: string;
  checked: boolean;
  checkTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
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

  handleDelete = (id: string) => {
    return () => {
      if (confirm('Are you sure about deleting this?')) {
        this.props.deleteTodo(id);
      }
    };
  };

  render(): ReactElement {
    const { id, content, checked } = this.props;
    const { mouseIn } = this.state;
    return (
      <li
        style={{ backgroundColor: mouseIn ? 'whitesmoke' : 'white' }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <input type="checkbox" checked={checked} onChange={this.handleCheck(id)} />
        <span>{content}</span>
        <button
          type="button"
          className="btn btn-danger"
          style={{ display: mouseIn ? 'block' : 'none' }}
          onClick={this.handleDelete(id)}
        >
          delete
        </button>
      </li>
    );
  }
}
