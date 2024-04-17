import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Room from "./pages/Room"

function App() {
  return (
    <div style={{overflow:"hidden"}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/room/:roomID" element={<Room/> } />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
