import React from 'react'
import { useState } from 'react'
import ChooseGame from './ChooseGame'


const Menu = () => {

    const [valClass, setClass] = useState(true)

    const Change = () => {
        setClass(!valClass)
    }
    return (
        <div className="menu">

            <h1 onClick={Change} className={valClass ? 'play' : 'off'}>play</h1>
            <ChooseGame showHide={!valClass ? 'block' : 'none'} />
        </div>
    )
}

export default Menu
