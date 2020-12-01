// * Types
export const ADD = "ADD";
export const DELETE = "DELETE";
export const COMPLETED = "COMPLETED";
export const REMOVE_ALL = "REMOVE_ALL";

export function Reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD:
      return [
        ...state,
        {
          id: Date.now(),
          text: " ",
          completed: false,
        },
      ];

    case DELETE:
      return state.filter((todo) => todo.id !== payload);

    case COMPLETED:
      return state.map((todo) => {
        // ? Check for matching todo id and toggle the checked, else return the orignal value of checked(false)
        if (todo.id === payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

    case REMOVE_ALL:
      return [];

    default:
      return { ...state };
  }
}
