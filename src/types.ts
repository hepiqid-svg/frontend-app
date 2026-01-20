// types.ts

import type { Action, ActionCreator } from 'redux';

// Auth related types
type AuthState = {
  isAuth: boolean;
  token: string;
};

type AuthActions = {
  login: (token: string) => Action;
  logout: () => Action;
};

// Todo related types
type TodoState = {
  todos: Todo[];
};

type Todo = {
  id: number;
  title: string;
};

type TodoActions = {
  addTodo: (title: string) => Action;
  removeTodo: (id: number) => Action;
};

// Generic types
type ActionCreator<T> = (payload: T) => Action;
type ReduxAction = Action & { type: string };

// Utility types
type ValidationResult = boolean | string;