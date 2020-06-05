import React, { Fragment } from 'react';
import "./ImageLinkForm.css";


const ImageLinkForm = ({ onInputChange, onClick }) => {
    return (
        <Fragment>
            <p className="center f2">
                {"This brain can detect faces in your pictures."}
            </p>
            <p className="center f3">
                {"Try it out!"}
            </p>
            <div className="center">
                <div className="shadow-5">
                    <input className="ml5 mt4 ma1" type="text" placeholder="Paste your image url" onChange={onInputChange} />
                    <button className="mr5 mb4 ma1 black" onClick={onClick} >Detect</button>
                </div>
            </div>
        </Fragment >
    )

}

export default ImageLinkForm;