import React from 'react'

const Multiplayer = ({showHide}) => {
    return (
        <div style={{display: showHide}} className='multiGame'>
            Play vs Friends !
            <p><i class="fa fa-users" aria-hidden="true"></i></p> 
            <h5>Create Game</h5>
            <h5>Join a Game</h5>
        </div>
    )
}

export default Multiplayer
