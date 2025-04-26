import './Exponent.css'

function Exponent({exponent, children, parenthesis}){
    return (
        <div className='exponent'>
            <span className={`
                ${parenthesis ? 
                    'exponent__left-parenthesis exponent__parenthesis' : 'exponent__not-parenthesis'
                }`}>
            </span>
            <span className='exponent__exponent' title='exponent'>{exponent}</span>
            <span className='exponent__base' title='base'>{children}</span>
            <span className={`
                ${parenthesis ? 'exponent__right-parenthesis exponent__parenthesis' : 'exponent__not-parenthesis'
                }`}>
            </span>
        </div>)
}

export default Exponent