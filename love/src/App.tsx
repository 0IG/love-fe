import {Route, Routes} from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import BadRoute from "./components/404/BadRoute"
import "./App.css"
export default function App() {
  return (
    <div className="app">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<BadRoute/>}/>
    </Routes>
    </div>
  )
}
