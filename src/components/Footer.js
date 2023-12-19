"use client"
import styles from "../styles/footer.module.css";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const handleGithub = () => {
  const pageURL = 'https://github.com/alfonsolopetegui';

  window.open(pageURL, "_blank");
};

const handleLinkedin = () => {
  const pageURL = 'https://www.linkedin.com/in/alfonso-lopetegui-42702a277/';

  window.open(pageURL, "_blank");
};

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <FontAwesomeIcon icon={faLinkedin} className={styles["icono"]} onClick={handleLinkedin}/>
      <FontAwesomeIcon icon={faGithub} className={styles["icono"]} onClick={handleGithub}/>
      {/* <FontAwesomeIcon icon={faEnvelope} className={styles["icono"]} /> */}
    </div>
  );
};

export default Footer;
