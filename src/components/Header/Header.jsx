import React from 'react'
import classes from './Header.module.scss'

const Header = (props) => {
    const handleClick = () => {
        props.setIsAboutClicked(true)
    }

    return (
        <div className={classes.df}>
            <h1>Посклоняем?</h1>
            <h2 onClick={handleClick}>О сервисе</h2>
        </div>
    )
}

export default Header