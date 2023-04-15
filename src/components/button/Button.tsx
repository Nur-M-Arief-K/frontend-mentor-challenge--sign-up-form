import React from 'react'

import "./styles.css";

interface ButtonProps {
  text: string,
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({ text, type }) => {
  return (
    <>
      <button className='button' type={type}>{ text }</button>
    </>
  )
}

export default Button