import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <div className={styles.item}>
            <MapPin />
            <p className={styles.address}>
              Vikas Nagar, Hubli - 580021 (Behind JRHP Petrolpump)
            </p>
          </div>
          <div className={styles.item}>
            <Phone />
            <p>9448923336</p>
          </div>
          <div className={styles.item}>
            <Mail />
            <p>vithobanetralaya@gmail.com</p>
          </div>
        </div>

        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/doctors">Our Doctors</a>
            </li>
            <li>
              <a href="/treatments">Treatments</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className={styles.emergency}>
          <h3>Emergency</h3>
          <p>Emergency surgeries are performed as per availability.</p>
          <div className={styles.hotline}>Emergency Hotline: 08364253595</div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>&copy; 2025 Vithoba Netralaya Eye Hospital. All Rights Reserved.</p>
        <p>
          Designed and developed solely by{" "}
          <a
            href="https://github.com/4t2de"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <FaGithub
              size={18}
              style={{
                verticalAlign: "middle",
                marginRight: "4px",
                position: "relative",
                top: "-1px",
              }}
            />4t2de
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
