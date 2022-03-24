import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const SIZES = ['btn--medium' , 'btn--large'];
const STYLES = ['btn--primary'  ,'btn--outline'];
const Buttons = ({children,  onClick , type , buttonSize, buttonStyle}) =>{
   
const checkButtonSize = (SIZES.includes(buttonSize) ? buttonSize : SIZES[0]);
const checkButtonStyle = (STYLES.includes(buttonStyle)? buttonStyle : STYLES[0]);

return (
    <Link to = "./sign-up" className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick = {onClick} type = {type}>
    {children}
    </Link>
);
}
export default Buttons;