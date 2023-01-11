import React from 'react'
import './button-style.scss'

const Button_Types={
    google:'google-sign-in',
    inverted:'inverted'
}

const Button = ({children,buttontype,...otherProps}) => {
  return (
<button className={`button-container ${Button_Types[buttontype]}`} {...otherProps}>{
   children}</button>
  )
}

export default Button;
