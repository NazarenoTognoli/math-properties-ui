import Exponent from '@/components/molecules/Exponent/Exponent'
import './ExponentiationProperties.css'

import Fraction from '@/components/molecules/Fraction/Fraction'
import Root from '@/components/molecules/Root/Root'
import Multiplication from '@/components/molecules/Multiplication/Multiplication'

function ExponentiationProperties({isActive = true}){
    return (
        <div className={`exponentiation-properties-cont ${!isActive ? 'exponentiation-properties-cont-disabled' : ''}`}>
            <div className='exponent-property'>
                <Exponent parenthesis={true} exponent='m' bottom="97%" left='105%'>
                    <Fraction numerator="a" denominator='b'></Fraction>
                </Exponent>
                <span>=</span>
                <Fraction numerator={<Exponent exponent='m' bottom="60%" left="90%">a</Exponent>} denominator={<Exponent exponent='m' left="90%" bottom="60%">b</Exponent>}>
                </Fraction>
            </div>
            <div className='exponent-property'>
                <Root index="n">
                    <Multiplication factor={["a", "b"]}></Multiplication>
                </Root>
                <span>=</span>
                <Multiplication factor={[
                    <Root index="n">
                        a
                    </Root>,
                    <Root index="n">
                        b
                    </Root> 
                ]}>
                </Multiplication>
                

            </div>
        </div>)
}

export default ExponentiationProperties