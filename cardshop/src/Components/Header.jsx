import { Link } from "react-router-dom";
import LogoImg from "/Assets/Loga1.png";
import Home from "../Pages/Home";
import { useState } from "react";

import "../header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <header
        style={{ display: "flex", gap: "20px", backgroundColor: "#060608" }}
      >
        <Link to="/">
          <img src={LogoImg} alt="Loga Image" className="logo" />
        </Link>

        <p className="icon">👤</p>
        <Link to="/Cart">
          <p className="icon">🛒</p>
        </Link>
        <button onClick={() => setMenuOpen(true)} className="set-menu">
          ☰
        </button>
      </header>

      {menuOpen && (
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            X
          </button>

          <Link
            className="nav-Link"
            to="/menu/1"
            onClick={() => setMenuOpen(false)}
          >
            Pokemon
          </Link>
          <Link
            className="nav-Link"
            to="/menu/2"
            onClick={() => setMenuOpen(false)}
          >
            Magic
          </Link>
          <Link
            className="nav-Link"
            to="/menu/3"
            onClick={() => setMenuOpen(false)}
          >
            Yu-Gi-Oh
          </Link>
          <Link
            className="nav-Link"
            to="/menu/4"
            onClick={() => setMenuOpen(false)}
          >
            Disney Lorcana
          </Link>
          <Link
            className="nav-Link"
            to="/menu/5"
            onClick={() => setMenuOpen(false)}
          >
            One Piece
          </Link>
          <Link
            className="nav-Link"
            to="/menu/6"
            onClick={() => setMenuOpen(false)}
          >
            Digimon
          </Link>
          <Link
            className="nav-Link"
            to="/menu/7"
            onClick={() => setMenuOpen(false)}
          >
            Star Wars
          </Link>
          <Link
            className="nav-Link"
            to="/menu/8"
            onClick={() => setMenuOpen(false)}
          >
            Flesh and Blood
          </Link>
          <Link
            className="nav-Link"
            to="/menu/9"
            onClick={() => setMenuOpen(false)}
          >
            More
          </Link>
        </div>
      )}

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}

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
