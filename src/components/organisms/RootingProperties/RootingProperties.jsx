import './RootingProperties.css'

import Root from 'mol/Root/Root.jsx'
 import Exponent from '@/components/molecules/Exponent/Exponent'
import Fraction from '@/components/molecules/Fraction/Fraction'

function RootingProperties({isActive = true}){
    return (
            <section className={`rooting-properties-cont ${!isActive ? 'rooting-properties-cont-disabled' : ''}`}>
                <article className='rooting-properties-1'>
                    <Root index="m" radicandStyle={{padding:"3px 15px 0 0"}}>
                        <Exponent exponent="n" left="90%" bottom="50%">a</Exponent>        
                    </Root>
                    <span className='equal'>=</span>
                    <Exponent 
                    notCompress={true}
                    exponent={
                        <Fraction denominator="n" numerator="m" padding='0'>
                        </Fraction>}
                        left="60%" bottom="50%" >
                        a
                    </Exponent>

                </article>
            </section>
        )
}

export default RootingProperties