import clsx from 'clsx';
import React from 'react';
import classes from './Button.module.css';

const STYLES = ['btn--main', 'btn--outline'];

const Button: React.FC<ButtonProp> = ({ onClick, children, buttonStyle }) => {
  const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  return (
    <button className={clsx(classes.btn, classes[checkStyle])}>
      {children}
    </button>
  );
};

interface ButtonProp {
  onClick?: () => void;
  children: string;
  buttonStyle: string;
}

export default Button;
