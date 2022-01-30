import { useReducer } from "react";


type State ={
  count:number
}

type UpdateAction = {
  type:"inc" | "dec"
  payload:number
}

type ResetAction = {
  type:"reset"
}


type Action = UpdateAction | ResetAction


const reducer = (state:State, action:Action) => {
  console.log(state, action);
  switch (action.type) {
    case "inc":
      return { count: state.count + action.payload };

    case "dec":
      return { count: state.count - action.payload };
    
    case "reset":
      return initialState;

    default:
      return state;
  }
};

const initialState = {
  count: 0,
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <br />
      <button onClick={() => dispatch({ type: "inc", payload: 10 })}>
        INC
      </button>
      <button onClick={() => dispatch({ type: "dec", payload: 10 })}>
        DEC
      </button>
      
      <button onClick={() => dispatch({ type: "reset" })}>
        DEC
      </button>
    </div>
  );
}

export default UseReducer;
