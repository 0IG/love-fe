import {Route, Routes} from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import Photos from "./components/photos/Photos"
import Locations from "./components/locations/Locations"
import List from "./components/list/List"
import Login from "./components/login/Login"
import Recommended from "./components/recommended/Recommended"
import Archive from "./components/archive/Archive"
import BadRoute from "./components/404/BadRoute"
import "./App.css"
export default function App() {

  return (
    <div className="app">
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/photos" element={<Photos/>}/>
      <Route path="/locations" element={<Locations/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/recommended" element={<Recommended/>}/>
      <Route path="/archive" element={<Archive />}/>
      <Route path="*" element={<BadRoute/>}/>
    </Routes>
    </div>
  )
}
