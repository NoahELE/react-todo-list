import { ReactElement, Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export type Todo = { id: string; content: string; checked: boolean };

interface isState {
  todos: Todo[];
}

export default class App extends Component<unknown, isState> {
  state = {
    todos: [
      { id: '1', content: '1', checked: true },
      { id: '2', content: '2', checked: false },
      { id: '3', content: '3', checked: false },
    ],
  };

  addTodo = (newTodoObj: Todo) => {
    let { todos } = this.state;
    todos = [newTodoObj, ...todos];
    this.setState({ todos });
  };

  render(): ReactElement {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    );
  }
}
