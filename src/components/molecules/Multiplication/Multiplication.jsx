import React from 'react';

import './Multiplication.css'

function Multiplication({ parenthesis, factor }) {
    return (
        <div className={`${parenthesis ? 'multiplication multiplication-parenthesis' : 'multiplication'}`} title='multiplication'>
            {factor.map((f, i) => (
                <React.Fragment key={i}>
                    <div className='multiplication__factor'>{f}</div>
                    {i < factor.length - 1 && (
                        <div className='multiplication__dot'>.</div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Multiplication;
