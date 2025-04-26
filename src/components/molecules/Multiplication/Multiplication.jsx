import React from 'react';

import './Multiplication.css'

import Factor from 'atom/Factor/Factor.jsx'

function Multiplication({ parenthesis, factor }) {
    return (
        <div className={`${parenthesis ? 'multiplication multiplication-parenthesis' : 'multiplication'}`} title='multiplication'>
            {factor.map((f, i) => (
                <React.Fragment key={i}>
                    <Factor className='multiplication__factor'>{f}</Factor>
                    {i < factor.length - 1 && (
                        <div className='multiplication__dot'>.</div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Multiplication