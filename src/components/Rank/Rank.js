import React, { Fragment } from 'react';



const Rank = ({ entries }) => {
    return (
        <Fragment>
            <div>
                <p className="f4 center">
                    {`You have scanned ${entries} images.`}
                </p>
            </div>
        </Fragment>
    )
}

export default Rank;