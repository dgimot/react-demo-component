import React from 'react';

const DemoDiv = props => {
    return (
        <div>{props.name ?? ''}</div>
    )
}

export default DemoDiv;