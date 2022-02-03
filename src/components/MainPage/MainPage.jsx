import React, {useMemo, useState} from 'react'
import classes from './MainPage.module.scss'
import caseDeclention from "./caseDeclention"
import Header from "../Header/Header"
import Input from "./Input/Input"
import Button from "./Button/Button"
import Footer from "../Footer/Footer"

const MainPage = (props) => {
    const [inputText, setInputText] = useState('')
    const [targetCase, setTargetCase] = useState('R')
    const [isShowResult, setIsShowResult] = useState(false)
    const [isNeedResult, setIsNeedResult] = useState(false)
    const [isAboutClicked, setIsAboutClicked] = useState(false)

    const handleClick = (e) => {
        setTargetCase(e.currentTarget.id)

        if (inputText !== '') {
            setIsShowResult(true)
            setIsNeedResult(toggle => !toggle)
        }
    }

    let result = useMemo(() => caseDeclention(inputText, targetCase), [isNeedResult])

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Header setIsAboutClicked={setIsAboutClicked}/>
            </div>
            <div className={classes.content}>
                <div className={classes.input}>
                    <Input handleKeyDown={handleClick} inputText={inputText} setInputText={setInputText}
                           setShowResult={setIsShowResult} setIsNeedResult={setIsNeedResult}/>
                </div>
                <div className={classes.buttons}>
                    <div className={classes.btnWrapper} id='R' onClick={handleClick}>
                        {targetCase === 'R' ? <Button title='Родительный' onTarget={true}/> : <Button title='Родительный'/>}
                    </div>
                    <div className={classes.btnWrapper} id='D' onClick={handleClick}>
                        {targetCase === 'D' ? <Button title='Дательный' onTarget={true}/> : <Button title='Дательный'/>}
                    </div>
                    <div className={classes.btnWrapper} id='V' onClick={handleClick}>
                        {targetCase === 'V' ? <Button title='Винительный' onTarget={true}/> : <Button title='Винительный'/>}
                    </div>
                    <div className={classes.btnWrapper} id='T' onClick={handleClick}>
                        {targetCase === 'T' ? <Button title='Творительный' onTarget={true}/> : <Button title='Творительный'/>}
                    </div>
                    <div className={classes.btnWrapper} id='P' onClick={handleClick}>
                        {targetCase === 'P' ? <Button title='Предложный' onTarget={true}/> : <Button title='Предложный'/>}
                    </div>
                </div>
                {isShowResult && <div className={classes.result}>{result[0].toUpperCase() + result.slice(1)}
                    <div className={classes.blurBg}/>
                </div>}
            </div>
            {isAboutClicked && <div className={classes.popup}>
                <h2>Дорогой посетитель!</h2>
                <span className={classes.popupText}>Вы находитесь на странице сервиса "Посклоняем?". Данный сервис предоставляет возможность сделать то,
                    о чём Вы так давно мечтали,но всё время откладывали на "потом": просклонять, наконец, свои любимые существительные по падежам.
                    Всё что нужно для этого - напечатать в поле для ввода существительное в именительном падеже и единственном числе. Правда, есть одно малюсенькое "но":
                сервис не поддерживает корректное сравнение имён собственных и не подозревает о существовании несклоняемых существительных.
                Возможны так же и другие неточности. Конечно, можно обвинить автора в том что он разгильдяй и растяпа, но стоит иметь ввиду,
                что он был ограничен жёстким дедлайном. Хотя, и первое вполне вероятно :) В любом случае, желаю Вам весело посклонять словечки!</span>
                <button className={classes.btnHidePopup} onClick={() => setIsAboutClicked(false)}>Вперёд!</button>
            </div>}
            <div className={classes.footer}>
                <Footer/>
            </div>
        </div>
    )
}

export default MainPage