import React from 'react'

function DismissButton({onClick}) {
    return (
        <div className='tickButtonParent'>
            <button class="animated-button-cross" onClick={onClick}></button>
        </div>
    )
}

export default DismissButton
