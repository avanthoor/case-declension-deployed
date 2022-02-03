import React, {useState} from 'react'
import classes from './MainPage.module.scss'
import caseDeclention from "./caseDeclention"
import Header from "../Header/Header";
import Input from "./Input/Input";

const MainPage = props => {
    const [inputText, setInputText] = useState('')
    const [target, setTarget] = useState('R')
    const [showResult, setShowResult] = useState(false)

    const handleChange = (e) => {
        setInputText(e.currentTarget.value)
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.currentTarget.blur()
            setInputText('')
        }
    }

    const handleClick = (e) => {
        setTarget(e.currentTarget.id)
        setShowResult(true)
    }

    let result = caseDeclention(inputText, target)

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Header/>
            </div>
            <div className={classes.input}>
                <Input/>
            </div>
            {/*<input onChange={handleChange} onKeyDown={handleKeyDown} value={inputText} type="text"*/}
            {/*       placeholder="Введите существительное в единственном числе, в именительном падеже"/>*/}
            <div className={classes.buttons}>
                <button id='R' onClick={handleClick}>Родительный</button>
                <button id='D' onClick={handleClick}>Дательный</button>
                <button id='V' onClick={handleClick}>Винительный</button>
                <button id='T' onClick={handleClick}>Творительный</button>
                <button id='P' onClick={handleClick}>Предложный</button>
            </div>
            {showResult && <div className={classes.result}>{result}</div>}
        </div>
    );
};

export default MainPage;