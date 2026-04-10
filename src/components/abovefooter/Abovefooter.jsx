import React from "react";
import styles from "./abovefooter.module.css";
import { Link } from "react-router-dom";

const Abovefooter = () => {
  return (
    <div className={styles.abovefooterWrapper}>
      <div className={styles.container}>
        <div className={styles.heading}>Eye Care you won't find elsewhere</div>
        <Link to="/appointment" className={styles.x}>
          <button className={styles.button}>Book an Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default Abovefooter;
