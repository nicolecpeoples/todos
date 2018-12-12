import React from 'react';

export default function InputText(props) {
  function _handleKeyPress(event) {
    if (event.key === 'Enter') {
      console.log(event.key)
      props.onBlurOrSubmit(event);
    }
  }
  return (
    <input
    type="text"
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    onKeyPress={_handleKeyPress}
  />);
}
