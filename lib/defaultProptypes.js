import PropTypes from 'prop-types';

export const reactChildren = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);

export default {
  reactChildren,
};
