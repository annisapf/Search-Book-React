import React from "react";

function Card(props) {
    return (
        <div className="card mb-3" {...props}>
            <div className="row">

                <div className="col-md-3 m-3">
                    <img src={props.src} className="card-img" alt={props.alt} />
                </div>

                <div className="col-md m-3">
                    <div className="row">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}
                                <span className="m-3">
                                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                                    <button name="view">{props.buttonvalue1}</button>
                                    </a>
                                    </span>
                                <span>
                                    <button name={props.buttonname2} onClick={props.onClick}{...props}>{props.buttonvalue2}</button>
                                </span>
                            </h5>
                            <h6 className="card-title">By: {props.authors}</h6>

                        </div>

                        <div className="card-body">
                            <div className="row">
                                <p className="card-text">{props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card;