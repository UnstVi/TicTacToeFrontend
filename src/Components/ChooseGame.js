import React from 'react'
import Multiplayer from './Multiplayer'
import SoloGame from './SoloGame'

const ChooseGame = ({showHide}) => {
    return (
        <div>
            <SoloGame showHide={showHide}/>
            <Multiplayer showHide={showHide}/>
        </div>
    )
}

export default ChooseGame
