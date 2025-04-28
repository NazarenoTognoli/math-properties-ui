import './FractionProperties.css'
import Fraction from 'mol/Fraction/Fraction.jsx'


function FractionProperties({isActive = true}){
    return (
        <div className={` ${!isActive ? 'fraction-properties-cont-disabled' : 'fraction-properties-cont-whole'}`}>
            <div className={`fraction-properties-cont fraction-multiplication-property`}>
                <Fraction numerator="a" denominator="b">    
                </Fraction>
                <span>.</span>
                <span>x</span>
                <span>=</span>
                <Fraction numerator="a" denominator="b">    
                </Fraction>
            </div>
            <div className='fraction-properties-cont fraction-multiplication-property'>
                <Fraction numerator={
                    <Fraction numerator="a" denominator="x">    
                </Fraction>
                } denominator={<Fraction numerator="b" denominator="x">    
                </Fraction>}></Fraction>
                <span>=</span>
                <Fraction numerator="a" denominator="b">    
                </Fraction>
            </div>
        </div>
        )
}

export default FractionProperties