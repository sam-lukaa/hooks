import { useReducer, useContext, createContext } from "react";
import { Reducer } from "../reducer/index";

const StateContext = createContext();
const DispatchContext = createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function useDispatchContext() {
  return useContext(DispatchContext);
}

export function ApplyContext({ children }) {
  const [state, dispatch] = useReducer(Reducer, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
