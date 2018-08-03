import React from 'react';

export default ( props ) => {
    return (
        <div className="container-fluid p-3 mb-2 bg-primary text-white font-weight-bold">
            {props.data}
        </div>
    )
}