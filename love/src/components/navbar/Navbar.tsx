import {Link} from "react-router-dom"
import "./Navbar.scss"
export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar__container">
            <ul className="navbar__list">
                <Link className="navbar__item" to="/photos">PHOTOS</Link>
                <Link className="navbar__item" to="/locations">LOCATIONS</Link>
                <Link className="navbar__item" to="/list">LIST</Link>
                <Link to="/" className="navbar__item">
                  <img className="navbar__itemImg" src="https://www.onlygfx.com/wp-content/uploads/2021/02/6-pixel-heart-6.png" alt="logo" />
                </Link>
                <Link to="/login" className="navbar__item">LOGIN</Link>
                <Link className="navbar__item" to="/recommended">RECOMMENDED</Link>
                <Link className="navbar__item" to="/archive">ARCHIVE</Link>
            </ul>
        </div>
    </div>
  )
}
