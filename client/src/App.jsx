import Canvas from './Canvas'
import Customizer from './pages/Customizer'
import Home from './pages/Home'

function App() {

  return (
    <main className="app transition-all easein">
      
      <Home />
      <Canvas />
      <Customizer />
      
    </main>
  )
}
export default App
