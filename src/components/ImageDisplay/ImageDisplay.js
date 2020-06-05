import React, { Fragment } from 'react';
import "./ImageDisplay.css";


const ImageDisplay = ({ box, input }) => {
    return (
        <Fragment>
            <div style={{ display: "flex", justifyContent: "center", }}>
                <div className="absolute shadow-5">
                    <img className="ma3 mr4 ml4 grow" id="image" alt="" height="300px" width="auto" src={input} />
                    <div className="bounding-box" style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol, }} />
                </div>
            </div>
        </Fragment >
    )
}



export default ImageDisplay;