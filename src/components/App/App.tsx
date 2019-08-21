import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppProps, AppState } from './App.interface';

import { Todo } from '../../state/todos/todos.interface';
import { fetchTodos, deleteTodo } from '../../state/todos/todos.actions';
import { StoreState } from '../../state/root.reducer';

class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  private _onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  private _onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  private renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div
          className="todo"
          key={todo.id}
          onClick={() => this._onTodoClick(todo.id)}
        >
          {todo.title}
        </div>
      );
    });
  }
  public render() {
    return (
      <div>
        <button onClick={this._onButtonClick}>Fetch</button>
        {this.state.fetching ? 'Loading...' : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
  todos
});

export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App);
