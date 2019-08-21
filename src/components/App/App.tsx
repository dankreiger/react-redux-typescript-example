import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { AppProps } from './App.interface';

import { Todo } from '../../state/todos/todos.interface';
import { fetchTodos, deleteTodo } from '../../state/todos/todos.actions';
import { StoreState } from '../../state/root.reducer';
import {
  selectTodos,
  selectTodosLoading
} from '../../state/todos/todos.selectors';
import { AppWrapper, AppButton, AppList } from './App.styles';

const App: FunctionComponent<AppProps> = ({
  loading,
  todos,
  fetchTodos,
  deleteTodo
}: AppProps): JSX.Element => {
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <AppWrapper>
      <AppButton onClick={() => fetchTodos()}>Fetch</AppButton>
      <AppList>
        {todos.map(({ id, title }: Todo) => (
          <li key={id} onClick={() => deleteTodo(id)}>
            {title}
          </li>
        ))}
      </AppList>
    </AppWrapper>
  );
};

// would be nice to use createStructuredSelector instead, but typescript is not having it
const mapStateToProps = (
  state: StoreState
): { todos: Todo[]; loading: boolean } => ({
  todos: selectTodos(state),
  loading: selectTodosLoading(state)
});

export default connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(App);

// // class Component example - see AppState interface
// class _App extends Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);

//     this.state = { fetching: false };
//   }

//   componentDidUpdate(prevProps: AppProps): void {
//     if (!prevProps.todos.length && this.props.todos.length) {
//       this.setState({ fetching: false });
//     }
//   }

//   private _onButtonClick = (): void => {
//     this.props.fetchTodos();
//     this.setState({ fetching: true });
//   };

//   private _onTodoClick = (id: number): void => {
//     this.props.deleteTodo(id);
//   };

//   private renderList(): JSX.Element[] {
//     return this.props.todos.map((todo: Todo) => {
//       return (
//         <div
//           className="todo"
//           key={todo.id}
//           onClick={() => this._onTodoClick(todo.id)}
//         >
//           {todo.title}
//         </div>
//       );
//     });
//   }
//   public render() {
//     return (
//       <div>
//         <button onClick={this._onButtonClick}>Fetch</button>
//         {this.state.fetching ? 'Loading...' : null}
//         {this.renderList()}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state: StoreState): { todos: Todo[] } => ({
//   todos: selectTodos(state)
// });

// export const App = connect(
//   mapStateToProps,
//   { fetchTodos, deleteTodo }
// )(_App);
