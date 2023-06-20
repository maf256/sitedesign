import React, { useState } from 'react';
import styled from 'styled-components';

// Styled radio button input
const RadioButtonInput = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

// Styled toggle button
const ToggleButton = styled.label`
  display: inline-block;
  width: 60px;
  height: 30px;
  background-color: ${(props) => (props.checked ? '#2196f3' : '#ccc')};
  border-radius: 15px;
  position: relative;
  transition: background-color 0.3s ease;

  ${RadioButtonInput}:checked + & {
    background-color: #2196f3;
  }

  &:after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    top: 3px;
    left: ${(props) => (props.checked ? 'calc(100% - 27px)' : '3px')};
    background-color: #fff;
    transition: left 0.3s ease;
  }
`;

// ToggleRadio component
const ToggleDark = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
      setChecked(!checked);
      console.log('checked',checked);
  };

  return (
    <ToggleButton checked={checked}>
      <RadioButtonInput checked={checked} onClick={handleToggle} />
    </ToggleButton>
  );
};

export default ToggleDark;
