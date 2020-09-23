import { SET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./todo.actions";

export const todoReducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_TODOS:
      return { ...state, todos: data };
    case ADD_TODO:
      const todos = {
        ...state.todos,
        [data.id]: { description: data.description },
      };
      return { ...state, todos };
    case DELETE_TODO:
      const todos2 = {
        ...state.todos,
      };
      delete todos2[data.id]
      return { ...state, todos: todos2 };
    case UPDATE_TODO:
      const todos3 = {
        ...state.todos,
        [data.id]: { description: data.description },
      };
      return { ...state, todos3 };
    default:
      return state;
  }
};
