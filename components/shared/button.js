import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  align-items: center;
  background-color: #ccc;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, 0.05);
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 23px;
  justify-content: center;
  line-height: 1.3em;
  outline: none;
  padding: 20px 40px;
  text-decoration: none;
  transition: 0.15s ease;

  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 50px 20px 10px rgba(0, 0, 0, 0.08);
  }
`;

const Text = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Emoji = styled.span`
  font-size: 1.6em;
  margin-left: 5px;
`;

const Button = ({ type, text, emoji, onClick, disabled, ...rest }) => <StyledButton
  type={type}
  disabled={disabled}
  onClick={(e) => {
    if (onClick != null) {
      e.preventDefault();
      onClick(e);
    }
  }}
  {...rest}
>
  {text && <Text>
    {text}
  </Text>}
  {emoji && <Emoji role="img" aria-label="">
    {emoji}
  </Emoji>}
</StyledButton>;

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  emoji: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  text: null,
  emoji: null,
  onClick: null,
  disabled: false,
};

export default Button;
