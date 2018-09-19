import { when } from "../when";
import { either } from "../either";

const toBooleanAttributeValue = value =>
  value === true ? "" : value === false ? null : value;

const applyAttribute = (element, name, value) =>
  either(
    value !== null,
    () => element.setAttribute(name, value),
    () => element.removeAttribute(name)
  );

const applyAsAttributes = (element, attributes) =>
  Object.keys(attributes).forEach(name =>
    applyAttribute(element, name, toBooleanAttributeValue(attributes[name]))
  );

export const render = _ => ({
  ..._,
  render: base => state =>
    when(state.element, () => {
      base.renderer(base)(state);

      when(state.attrs, () => applyAsAttributes(state.element, state.attrs));
    })
});
