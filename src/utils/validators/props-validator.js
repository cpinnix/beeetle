import { checkPropTypes } from 'prop-types';

export const propsValidator = propTypes => base => ({
  ...base,
  propsValidator: props => checkPropTypes(propTypes, props, 'prop', base.name),
});
