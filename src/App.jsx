import { useState } from "react"
import Index from "./Components/Index/Index"
import Home from './Components/Home/Home'

function App() {
  
  const [conectado,setConectado] = useState(false);

  const acceder = (estado) => {
    setConectado(estado)
  }

  return (
          <main>
            { conectado ? <Home /> : <Index acceder={acceder}/> }
          </main>
  )
}

export default App
