import React, { Fragment } from 'react';

const LogOut = ({ onRouteChange }) => {
    return (
        <Fragment>
            <div style={{ display: "flex", justifyContent: "flex-end" }} >
                <p onClick={() => onRouteChange("signIn")} className="tr f4 shadow-5 pa3 pointer grow ma2" >
                    {"Log Out"}
                </p>
            </div >
        </Fragment >
    )
}

export default LogOut;