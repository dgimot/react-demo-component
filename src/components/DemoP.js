import React from 'react';

const DemoP = props => {
    return (
        <p>{props.name ?? ''}</p>
    )
}

export default DemoP;