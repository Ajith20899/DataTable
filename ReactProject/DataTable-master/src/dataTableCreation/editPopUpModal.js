import React from 'react';

export const EditPopUpModal = (props) => {
    return (
        <div className="editPopModal">
            <div className="editContainer"> 
                <div className="editInputContainer">
                    <p>update the fields</p> 
                    <input type="text" disabled={true} value={props.Data[props.index].id } className="editInput" />
                    <input type="text" disabled={true} value={props.Data[props.index].name} className="editInput" />
                    <input disabled={true} value={props.Data[props.index].status} className="editInput" />
                    <input type="email" onChange={props.getEmail} value={props.Email} className="editInput" />
                    <input type="text" onChange={props.getPhoneNo} value={props.PhoneNo} className="editInput" />
                </div>
                <div className="cancelButtonAndUpdateButton">
                    <button className="cancelButton editCancel" onClick={props.cancel}>cancel</button>
                    <button className="updateButton" onClick={props.update}>update</button>
                </div>
            </div>
        </div>
    )
} 