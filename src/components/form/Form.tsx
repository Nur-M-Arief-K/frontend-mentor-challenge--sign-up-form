import React from 'react'

import "./styles.css";

interface FormProps {
  children: React.ReactNode;
  onSubmit: () => void;
}

const Form: React.FC<FormProps> = React.memo(({ children, onSubmit }) => {
  return (
    <form className='form' onSubmit={onSubmit}>{ children }</form>
  )
})

export default Form