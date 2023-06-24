import React from "react";
import styles from "./banner.module.scss";
import { Link } from "react-router-dom";
function Banner(props) {
  return (
    <div className={styles.banner}>
      <p className={styles.para1}>
        The Best Center for <br /> Arabic and Islamic studies
      </p>
      <div>
        <Link to='#' className={styles.btn}>Register Now</Link>
      </div>
    </div>
  );
}

export default Banner;
