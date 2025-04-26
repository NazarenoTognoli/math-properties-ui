import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//components
import Integer from 'atom/Integer/Integer.jsx'
import Fraction from 'mol/Fraction/Fraction.jsx'
import Variable from 'atom/Variable/Variable.jsx'
import Exponent from 'mol/Exponent/Exponent.jsx'
import Multiplication from 'mol/Multiplication/Multiplication'
//styles
import './main.css' //uso de rutas relativas, configurar shortcuts instead
import './normalize.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <nav className="controller">
      <button>A</button>
      <button>B</button>
      <button>C</button>
      <button>Client-Side Domain Logic</button>
    </nav>
    <div className="main-cont">
    <Multiplication factor={[
      <Exponent exponent={<Fraction
                numerator={<Variable>a</Variable>} 
                denominator={
                    <Fraction 
                    numerator={<Variable>y</Variable>}
                    denominator=<Variable>x</Variable>>
                    </Fraction>}>
                </Fraction>} parenthesis={true}>
          <Fraction 
            numerator={
                <Fraction
                numerator={<Variable>a</Variable>} 
                denominator={
                    <Fraction 
                    numerator={<Variable>y</Variable>}
                    denominator=<Variable>x</Variable>>
                    </Fraction>}>
                </Fraction>} 
            denominator=
              <Exponent
              exponent="4">
                <Variable>b</Variable>
              </Exponent>>
          </Fraction>
        </Exponent>, 2, 4, 
    ]}>
      </Multiplication>
    </div>
  </StrictMode>
)
