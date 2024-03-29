import React from 'react'

function TaskInput({taskInputChange,currentValue}) {
  return (
    <input type="text" name="text" class="input" placeholder="Type Your Tasks Here" value={currentValue} onChange={taskInputChange}/>

  )
}

export default TaskInput
