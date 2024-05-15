import "./Navbar.scss"
export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar__container">
            <ul className="navbar__list">
                <li className="navbar__item">PHOTOS</li>
                <li className="navbar__item">IDEAS</li>
                <li className="navbar__item">LIST</li>
                <li className="navbar__item">
                    <img className="navbar__itemImg" src="https://www.onlygfx.com/wp-content/uploads/2021/02/6-pixel-heart-6.png" alt="logo" />
                </li>
                <li className="navbar__item">LOGIN</li>
                <li className="navbar__item">RECOMMENED</li>
                <li className="navbar__item">ARCHIVE</li>
            </ul>
        </div>
    </div>
  )
}
