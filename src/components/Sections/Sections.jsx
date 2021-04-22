import React from 'react'

const Sections = ({ title,children }) => {
    return (
        <>
            <h2>{title}</h2>
            {children}
        </>
        )
};

export default Sections;