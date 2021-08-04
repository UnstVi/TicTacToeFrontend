import React from 'react'

const SoloGame = ({showHide}) => {
    return (
        <div style={{display: showHide}} className='soloGame'>
            Play vs Computer !
           <p><i class="fa fa-desktop" aria-hidden="true"></i></p> 
           <h5>Coming soon</h5>
        </div>
    )
}

export default SoloGame
