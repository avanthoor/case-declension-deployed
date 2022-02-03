import React from 'react'
import classes from './Header.module.scss'

const Header = (props) => {
    return (
        <div className={classes.df}>
            <h1>Падеж</h1>
            <h2>О сервисе</h2>
        </div>
    )
}

export default Header;