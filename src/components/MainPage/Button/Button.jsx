import React from 'react'
import classes from './Button.module.scss'

const Button = (props) => {
    return (
        <button className={props.onTarget ? classes.btnTarget : classes.btn}>{props.title}</button>
    )
}

export default Button