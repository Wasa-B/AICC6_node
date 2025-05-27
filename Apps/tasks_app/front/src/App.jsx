import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Common/NavBar";
import Important from "./components/Important";
import Proceeding from "./components/Proceeding";
import Completed from "./components/Completed";
function App() {

  return (
    <div className='flex h-screen'>
      <BrowserRouter>
        {/* <div className='py-[0.5rem] h-full w-1/5'>
          <NavBar />
        </div> */}
        <div className='h-full w-full'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/important" element={<Important />} />
            <Route path="/proceeding" element={<Proceeding />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
