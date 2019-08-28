import React from 'react';
import './textfield.scss';
import PropTypes from 'prop-types';

/**
 * @function TextField
 * @param {object} props
 * @returns {object} JSX
 */
function TextField({ label, value, type, handleChange }) {
  return (
    <div className="textfield">
      <label className="textfield__label">{label}</label>
      <input
        type={type || 'text'}
        className="textfield__content"
        name={label}
        value={value}
        onChange={e => handleChange(e)}
      />
    </div>
  );
}

export default TextField;

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};

TextField.defaultProps = {
  type: undefined
};
