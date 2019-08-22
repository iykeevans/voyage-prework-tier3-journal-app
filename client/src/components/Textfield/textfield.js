import React from 'react';
import './textfield.scss';

function TextField({ label, value, type, handleChange }) {
  return (
    <div className="textfield">
      <label className="textfield__label">{ label }</label>
      <input type={type || 'text'} className="textfield__content" name={ label } value={ value } onChange={ (e) => handleChange(e) }/>
    </div>
  );
}

export default TextField;
