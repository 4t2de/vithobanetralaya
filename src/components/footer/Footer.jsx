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
            <p><a href="tel:+919448923336" className={styles.footerLink}>9448923336</a></p>
          </div>
          <div className={styles.item}>
            <Mail />
            <p><a href="mailto:vithobanetralaya@gmail.com" className={styles.footerLink}>vithobanetralaya@gmail.com</a></p>
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
          <div className={styles.hotline}>Emergency Hotline: <a href="tel:08364253595" className={styles.hotlineLink}>08364253595</a></div>
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
