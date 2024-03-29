import React from 'react';

function EditInput({value,onChange}) {
    return (
        <input type="text" value={value} placeholder="Write here..." name="text" className="edit-input" onChange={onChange}/>
    );
}

export default EditInput;
