import React, { useState } from "react";
import styles from "./navbar.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../images/lll.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${styles.navbarWrapper} ${isHomePage ? styles.transparent : ""}`}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <Link to="/" className={styles.logotext}>
            Vithoba Netralaya
          </Link>
        </div>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></span>
          <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></span>
        </button>
        <div className={`${styles.links} ${menuOpen ? styles.show : ""}`}>
          <Link to="/about" className={styles.link} onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/doctors" className={styles.link} onClick={() => setMenuOpen(false)}>
            Doctors
          </Link>
          <Link to="/treatments" className={styles.link} onClick={() => setMenuOpen(false)}>
            Treatments
          </Link>
          <Link to="/contact" className={styles.link} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <div className={styles.button}>
            <button
              className={`${styles.link} ${styles.cta}`}
              onClick={() => { navigate("/appointment"); setMenuOpen(false); }}
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
