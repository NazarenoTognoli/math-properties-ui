import './Fraction.css'

function Fraction({numerator, denominator, padding="4px"}){
    return (
        <article className="fraction-cont" title="numero real">
            <div className="numerator" title="numerator" style={{padding:padding}}>
                <span>{numerator}</span>
            </div>
            <div className="fraction__divider-line"></div>
            <div className="denominator" title="denominator" style={{padding:padding}}>
                <span>{denominator}</span>
            </div>            
        </article>)
}

export default Fraction