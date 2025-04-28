import './Exponent.css'
import React, { useState, useEffect, useRef } from 'react';

function Exponent({exponent, children, parenthesis, notCompress = false, bottom="90%", left="110%"}){
    const elementRef = useRef(null); // Paso 1: Crear la referencia
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
    if (elementRef.current) {
      setSize({
        width: elementRef.current.clientWidth,
        height: elementRef.current.clientHeight,
      });
    }
    }, []);
    return (
        <div className='exponent'>
            <span className={`
                ${parenthesis ? 
                    'exponent__left-parenthesis exponent__parenthesis' : 'exponent__not-parenthesis'
                }`}>
            </span>
            <span ref={elementRef} style={{left:left, bottom:bottom}} className={size.width > 30 && !notCompress ? 'exponent__exponent exponent__exponent-compress' : 'exponent__exponent'} title='exponent'>{exponent}</span>
            

            {size.width > 30 && !notCompress ? <button title="deploy exponent" style={{left:left, bottom:bottom}} className='exponent__exponent-compress-btn'>{'{...}'}</button> : undefined}
            

            <span className='exponent__base' title='base'>{children}</span>
        </div>)
}

export default Exponent