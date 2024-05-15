import {Route, Routes} from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import "./App.css"
export default function App() {
  return (
    <div className="app">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
  )
}
