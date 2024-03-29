import React from 'react'

function TickButton({updateTask,id,updatedTaskText}) {
  return (
    <div className='tickButtonParent'>
     <button className="animated-button" onClick={()=>updateTask(id,updatedTaskText)}></button> 
    </div>
  )
}

export default TickButton
