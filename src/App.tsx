import { ReactElement, Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export type Todo = { id: string; content: string; checked: boolean };

interface IsState {
  todos: Todo[];
}

export default class App extends Component<unknown, IsState> {
  state: IsState = {
    todos: [],
  };

  addTodo = (newTodoObj: Todo) => {
    const { todos } = this.state;
    this.setState({ todos: [newTodoObj, ...todos] });
  };

  checkTodo = (id: string) => {
    const { todos } = this.state;
    todos.map((value) => {
      if (value.id === id) {
        value.checked = !value.checked;
      }
      return value;
    });
    this.setState({ todos });
  };

  deleteTodo = (id: string) => {
    const { todos } = this.state;
    this.setState({ todos: todos.filter((value) => value.id !== id) });
  };

  render(): ReactElement {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} checkTodo={this.checkTodo} deleteTodo={this.deleteTodo} />
          <Footer />
        </div>
      </div>
    );
  }
}
