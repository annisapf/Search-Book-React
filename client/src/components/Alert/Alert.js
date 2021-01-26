import React from "react";

function SuccessAlert(props) {
    return (
        <div className="alert alert-success" id={`success-alert${props.alertnumber}`} style={{display:"none"}} {...props}>
             {props.title} is saved.
        </div>
    )
}

function DangerAlert(props) {
    return (
        <div className="alert alert-danger" id={`danger-alert${props.alertnumber}`} style={{display:"none"}} {...props}>
            {props.title} is removed.
        </div>
    )
}

export { SuccessAlert, DangerAlert }