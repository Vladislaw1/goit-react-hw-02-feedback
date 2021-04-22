import React from 'react';

const FeedbackOptions = ({ options }) => {
    
    const btnElements = options.map(({id,name,onClick}) => {
        return <button key={id} onClick={onClick}>{name}</button>
    })
    
    return (
        <>
            {btnElements}
        </>
    );
};

export default FeedbackOptions;