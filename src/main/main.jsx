import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//components
import Integer from 'atom/Integer/Integer.jsx'
import Fraction from 'mol/Fraction/Fraction.jsx'
import Variable from 'atom/Variable/Variable.jsx'
import Exponent from 'mol/Exponent/Exponent.jsx'
import Multiplication from 'mol/Multiplication/Multiplication'
import FractionProperties from '@/components/organisms/FractionProperties/FractionProperties'
import ExponentiationProperties from 'org/ExponentiationProperties/ExponentiationProperties.jsx'
import RootingProperties from '@/components/organisms/RootingProperties/RootingProperties'
//styles
import './main.css' //uso de rutas relativas, configurar shortcuts instead
import './normalize.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <nav className="controller">
      <button>Fraction</button>
      <button>Exponentiation</button>
      <button>Rooting</button>
      <button>Client-Side Domain Logic</button>
    </nav>
    <div className="main-cont">
      <FractionProperties isActive={false}></FractionProperties>
      <ExponentiationProperties isActive={true}></ExponentiationProperties>
      <RootingProperties isActive={false}></RootingProperties>
    </div>
  </StrictMode>
)
