import styled from 'styled-components'

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
`

const StyledToggle = styled.label`
  display: inline-block;
  width: 60px;
  height: 30px;
  background-color: ${({ checked, theme }) =>
    checked ? theme.activeToggle : '#ccc'};
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &::after {
    content: '${props => (props.checked ? props.on : props.off)}';
    position: absolute;
    top: 3px;
    left: ${({ checked }) => (checked ? 'calc(100% - 27px)' : '3px')};
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    transition: left 0.3s ease;
  }
`

const ToggleSwitch = ({ checked, toggle, on = '🌞', off = '🌜' }) => (
  <StyledLabel>
    <HiddenInput checked={checked} onChange={toggle} />
    <StyledToggle checked={checked} on={on} off={off} />
  </StyledLabel>
)

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
`

export default ToggleSwitch
