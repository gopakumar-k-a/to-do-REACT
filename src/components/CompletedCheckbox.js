import React from 'react'

function CompletedCheckbox({obj,changeStatus}) {
    return (
        <>
            <label className="container">
                <input  type="checkbox" onChange={() => changeStatus(obj.id)}/>
                    <div className="checkmark"></div>
            </label>
        </>
    )
}

export default CompletedCheckbox


