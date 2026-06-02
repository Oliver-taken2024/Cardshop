import { Link } from "react-router-dom";
import LogoImg from "/Assets/Loga1.png";
import Home from "../Pages/Home";

function Header() {
  return (
    <div>
      <header
        style={{ display: "flex", gap: "20px", backgroundColor: "#060608" }}
      >
        <Link to="/">
          <img src={LogoImg} alt="Loga Image" style={{ width: "65px" }} />
        </Link>
        <input type="text" placeholder="Search" />

        <p className="Profile">Profile icon</p>
        <Link to="/Cart">
          <p className="Cart">Cart icon</p>
        </Link>
        <p className="Setting"> Inställningar</p>
      </header>

      <nav className="Navbar">
        {/* Här ändras Urlen till /menu/1 */}
        <Link className="nav-Link" to="/menu/1">
          Pokemon
        </Link>
        <Link className="nav-Link" to="/menu/2">
          Magic
        </Link>
        <Link className="nav-Link" to="/menu/3">
          Yu-Gi-Oh
        </Link>
        <Link className="nav-Link" to="/menu/4">
          Disney Lorcana
        </Link>
        <Link className="nav-Link" to="/menu/5">
          One Piece
        </Link>
        <Link className="nav-Link" to="/menu/6">
          Digimon
        </Link>
        <Link className="nav-Link" to="/menu/7">
          Star Wars
        </Link>
        <Link className="nav-Link" to="/menu/8">
          Flesh and Blood
        </Link>
        <Link className="nav-Link" to="/menu/9">
          More
        </Link>
      </nav>
    </div>
  );
}

export default Header;
