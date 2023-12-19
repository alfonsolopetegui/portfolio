"use client";
import { useState, useEffect } from "react";
import styles from "../styles/scrollBtn.module.css";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const ScrollBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (typeof window !== "undefined") {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []); 

  // window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={`${styles["scroll-btn-container"]} ${
        visible ? styles.visible : ""
      }`}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon
        
        icon={faChevronUp}
        className={styles["icono"]}
      />
    </div>
  );
};
