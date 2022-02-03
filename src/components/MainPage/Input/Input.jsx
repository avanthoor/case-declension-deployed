import React from 'react'
import classes from './Input.module.scss'

const Input = props => (
    <div className={classes.inputWrapper}>
        <input type="text" className={classes.input}/>
        <div className={classes.clearBtn}>
            <div className={classes.cross}></div>
        </div>
        <div className={classes.generateBtn}>Сгенерировать</div>
    </div>
);

export default Input;