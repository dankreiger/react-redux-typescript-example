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

// would be nice to use createStructuredSelector instead
// but typescript is not having it
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
