import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css' //uso de rutas relativas, configurar shortcuts instead
import './normalize.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <nav class="controller">
      <button>A</button>
      <button>B</button>
      <button>C</button>
      <button>Client-Side Domain Logic</button>
    </nav>
    <div class="main-cont">
      <section class="n-reales-cont">
        <article class="division-operation-cont">
          <div class="numerador">
            <span>a</span>
          </div>
          <div class="denominador">
            <span>b</span>
          </div>
        </article> 
      </section>
    </div>
  </StrictMode>,
)
