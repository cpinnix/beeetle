# Beeetle

Minimal web component framework.

## Install

```
yarn add @beeetle/ut-component ramda
```

## Features

### Renderer Agnostic

Beeetle has no renderer opinions. React, Vue, Lit, Hyper...they should all
work. The render function provides the `element` to render into and
`props`.

### Hooks

Managing state and reacting to lifecycle events is done with hooks.
Available hooks are: `useState`, `useEffect` and `useReducer`. Examples of
these hooks can be found below.

## Usage

### Props and Render

Beeetle components require a `name` and `render` function; `props` are
optional. Example:

```
import { create } from "@beeetle/ut-component";
import classes from "./index.css";

create({
  name: "be-text",
  props: {
    text: "Put some text here."
  },
  render: (element, { text }) => {
    element.textContent = text;
    element.classList.add(classes.text);
  }
});
```

`props` are set directly on the element. Example:

```
document.querySelector('be-text').text = 'Hello World';
```

### useState and useEffect

`useState` is inspired by [React's
`useState`](https://reactjs.org/docs/hooks-state.html) and `useEffect` is
inspired by [React's
`useEffect`](https://reactjs.org/docs/hooks-effect.html). `useState` and
`useEffect` example:

```
import { create, useState, useEffect } from "@beeetle/ut-component";
import hyper from "../../renderers/hyper";
import classes from "./index.css";
import "../be-text";

const getTime = () => Date.now();

create({
  name: "be-time",
  render: hyper(wire => {
    const [state, setState] = useState({ time: getTime() });

    useEffect(() => {
      const timeout = setTimeout(() => setState({ time: getTime() }), 1000);

      return () => clearTimeout(timeout);
    });

    return wire()`
      <be-text
        class=${classes.time}
        text=${state.time}
      />
    `;
  })
});
```

### useReducer

`useReducer` is similar to `useState` except that is takes a reducer
function as well as initial state. The todo example below illustrates how
to use `useReducer`. `useReducer` example:

```
import { cond, T } from "ramda";
import { create, useReducer } from "@beeetle/ut-component";
import hyper from "../../renderers/hyper";
import "../be-text"; import "../be-button";

const NAME = "be-todo";

const hasType = t => (_, { type }) => type === t;

const ADD = "ADD";
const REMOVE = "REMOVE";
const CHANGE = "CHANGE";
const TOGGLE = "TOGGLE";

const add = state => ({
  ...state,
  todos: [...state.todos, { label: "", checked: false }]
});

const remove = (state, { payload: { index } }) => ({
  ...state,
  todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)]
});

const change = (state, { payload: { index, label } }) => {
  state.todos[index].label = label;

  return state;
};

const toggle = (state, { payload: { index } }) => ({
  ...state,
  todos: [
    ...state.todos.slice(0, index),
    { ...state.todos[index], checked: !state.todos[index].checked },
    ...state.todos.slice(index + 1)
  ]
});

const withLogger = reducer => (state, action) => {
  const newState = reducer(state, action);

  console.groupCollapsed(`${NAME} - ${action.type.toLowerCase()}`);
  console.log("action", action);
  console.log("prevState", state);
  console.log("nextState", newState);
  console.groupEnd();

  return newState;
};

const reducer = withLogger(
  cond([
    [hasType(ADD), add],
    [hasType(REMOVE), remove],
    [hasType(CHANGE), change],
    [hasType(TOGGLE), toggle],
    [T, state => state]
  ])
);

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
            <be-button
              label=${"Remove"}
              click=${() => dispatch({ type: REMOVE, payload: { index }})}
            />
          </div>
        `)}
        <be-button click=${() => dispatch({ type: ADD })} label=${"Add"} />
      </div>
    `;
  })
  });
```
