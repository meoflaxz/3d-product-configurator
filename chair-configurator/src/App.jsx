import { Canvas } from "@react-three/fiber"
import './App.css'
import Experience from './components/Experience';
import Configurator from './components/Configurator';
function App() {

  return (
      <div className="App">
        <Canvas>
          <color attach="background" args={["#000000"]} />
          <fog attach="fog" args={["#000000", 10, 20]} />
          <Experience />
        </Canvas>
        <Configurator/>
    </div>
  )
}

export default App
