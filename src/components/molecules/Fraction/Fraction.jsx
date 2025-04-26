import './Fraction.css'

function Fraction({numerator, denominator}){
    return (
        <article className="fraction-cont" title="numero real">
            <div className="numerator" title="numerator">
                <span>{numerator}</span>
            </div>
            <div className="fraction__divider-line"></div>
            <div className="denominator" title="denominator">
                <span>{denominator}</span>
            </div>            
        </article>)
}

export default Fraction