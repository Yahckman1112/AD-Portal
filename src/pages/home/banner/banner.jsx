import React from "react";
import styles from "./banner.module.scss";
import { Link } from "react-router-dom";
import { HiOutlineAcademicCap } from "react-icons/hi";
function Banner(props) {
  const skilsData = [
    {
      icon: <HiOutlineAcademicCap className={styles.skills_logo} />,
      title: "Tajweed Class",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      icon: <HiOutlineAcademicCap className={styles.skills_logo} />,
      title: "Tajweed Class",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      icon: <HiOutlineAcademicCap className={styles.skills_logo} />,
      title: "Tajweed Class",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      icon: <HiOutlineAcademicCap className={styles.skills_logo} />,
      title: "Tajweed Class",
      text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ];
  return (
    <div>
      <div className={styles.banner}>
        <p className={styles.para1}>
          The Best Center for Arabic and Islamic studies
        </p>
        <div>
          <Link to="#" className={styles.btn}>
            Register Now
          </Link>
        </div>
      </div>
      <div className={styles.skills}>
        <div className="container">
          <div className="row">
            {skilsData.map((item) => (
              <div className="col-12 col-lg-3 col-md-12">
                <div className={styles.skills_card}>
                  <HiOutlineAcademicCap className={styles.skills_logo} />
                  <p className={styles.skills_para1}>Tajweed Classes</p>
                  <p className={styles.para2}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolore, libero.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
