import { cond, T, identity } from "ramda";
import { create, useReducer } from "../../beeetle";
import hyper from "../../renderers/hyper";
import "../btl-text";
import "../btl-button";

const NAME = "btl-todo";

const is = t => (_, { type }) => type === t;

const ADD = "ADD";
const REMOVE = "REMOVE";
const CHANGE = "CHANGE";
const TOGGLE = "TOGGLE";

const reducer = (state, action) => {
  const newState = cond([
    [
      is(ADD),
      state => ({
        ...state,
        todos: [...state.todos, { label: "", checked: false }]
      })
    ],
    [
      is(REMOVE),
      (state, { payload: { index } }) => ({
        ...state,
        todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)]
      })
    ],
    [
      is(CHANGE),
      (state, { payload: { index, label } }) => {
        state.todos[index].label = label;

        return state;
      }
    ],
    [
      is(TOGGLE),
      (state, { payload: { index } }) => ({
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          { ...state.todos[index], checked: !state.todos[index].checked },
          ...state.todos.slice(index + 1)
        ]
      })
    ],
    [T, identity]
  ])(state, action);

  console.groupCollapsed(`${NAME} - ${action.type.toLowerCase()}`);
  console.log("action", action);
  console.log("prevState", state);
  console.log("nextState", newState);
  console.groupEnd();

  return newState;
};

create({
  name: NAME,
  render: hyper(wire => {
    const [state, dispatch] = useReducer(reducer, { todos: [] });

    // prettier-ignore
    return wire(state)`
      <div>
        ${state.todos.map((todo, index) => wire(todo)`
          <div>
            <input
              type="checkbox"
              checked=${todo.checked}
              onclick=${() => dispatch({
                type: TOGGLE,
                payload: { index }
              })}
            />
            <input
              value=${todo.label}
              oninput=${({ target: { value }}) => dispatch({
                type: CHANGE,
                payload: { index, label: value }
              })}
            />
            <btl-button
              label=${"Remove"}
              click=${() => dispatch({ type: REMOVE, payload: { index }})}
            />
          </div>
        `)}
        <btl-button click=${() => dispatch({ type: ADD })} label=${"Add"} />
      </div>
    `;
  })
});
