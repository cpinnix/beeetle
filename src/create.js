import {
  component,
  pipe,
  updateElement,
  updateName,
  updateState,
  stateTransformer,
  render,
  mount,
  unmount
} from "./utils";
// import { printWarning } from './print-warning';

const create = (...plugins) =>
  pipe(
    ...plugins,
    stateTransformer(state => ({
      ...state,
      actions: Object.keys(state.actions).reduce(
        (a, v) => ({
          ...a,
          [v]: () => {
            console.log(["ACTION", state.name, v].join(" | "));
            return state.actions[v];
          }
        }),
        {}
      )
    })),
    // i18nValidator(({ i18n, name }) =>
    //   Object.keys(i18n).forEach(key => {
    //     if (key !== key.toUpperCase())
    //       printWarning(
    //         `Failed i18n key: Invalid key \`${key}\` not uppercase supplied to \`${name}\`, expected uppercase key.`
    //       );
    //   })
    // ),
    // didUpdateI18n(({ name, i18n }) =>
    //   console.log(['I18N', name, JSON.stringify(i18n)].join(' | '))
    // ),
    updateElement,
    updateName,
    updateState,
    render,
    mount,
    unmount,
    component
  )({});

export default create;
