import React, {useEffect, useState} from 'react'
import classes from './Input.module.scss'

const Input = (props) => {
    const handleChange = (e) => {
        props.setInputText(e.currentTarget.value)
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && props.inputText !== '') {
            e.currentTarget.blur()
            props.setShowResult(true)
            props.setIsNeedResult(toggle => !toggle)
        }
    }

    const handleClickGenerate = () => {
        if (props.inputText !== '') {
            props.setShowResult(true)
            props.setIsNeedResult(toggle => !toggle)
        }
    }

    const handleClickClear = () => {
        props.setInputText('')
        props.setShowResult(false)
    }

    return (
        <div className={classes.inputWrapper}>
            <input type="text" className={classes.input}
                   placeholder='Введите существительное в именительном падеже в единственном числе'
                   onChange={handleChange} onKeyDown={handleKeyDown} value={props.inputText}/>
            <div className={classes.clearBtn}>
                <div className={classes.cross} onClick={handleClickClear}></div>
            </div>
            <div className={classes.generateBtn} onClick={handleClickGenerate}>Сгенерировать</div>
        </div>
    )
}

export default Input