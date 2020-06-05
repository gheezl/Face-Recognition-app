import React, { Fragment } from 'react';
import brain from "./brain.png";
import Tilt from 'react-tilt';
import "./Image.css"

const Image = () => {
    return (
        <Fragment>
            <div>
                <Tilt className="Tilt center grow" options={{ max: 50 }} style={{ height: 100, width: 100 }} >
                    <div className="Tilt-inner">
                        <img className="shadow-5" alt="brainImage" src={brain} />
                    </div>
                </Tilt>
            </div>
        </Fragment>
    )
}

export default Image;