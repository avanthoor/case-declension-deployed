import React, {useState} from 'react';
import classes from './MainPage.module.scss'
import caseDeclention from "./caseDeclention";

function MainPage(props) {
    const [inputText, setInputText] = useState('')

    const handleChange = (e) => {
        setInputText(e.currentTarget.value)
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.currentTarget.blur()
            setInputText('')
        }
    }

    console.log(caseDeclention('роскошь', 'Родительный'));


    return (
        <div className={classes.mainPage}>
            <input onChange={handleChange} onKeyDown={handleKeyDown} value={inputText} type="text"
                   placeholder="Введите существительное в единственном числе, в именительном падеже"/>
            <div className={classes.buttons}>
                <button id=''>Родительный</button>
                <button>Дательный</button>
                <button>Винительный</button>
                <button>Творительный</button>
                <button>Предложный</button>
            </div>
        </div>
    );
}

export default MainPage;