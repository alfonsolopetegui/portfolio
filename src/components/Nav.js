"use client";
import { useState } from "react";
import styles from "../styles/nav.module.css";
import Link from "next/link";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const Nav = () => {
  //visibilidad del menu
  const [active, setActive] = useState(false);
  //visibilidad del icono izquierda
  const [visible, setVisible] = useState(false);

  const handleActive = () => {
    setVisible(true);
    setActive(!active);
  };

  const handleVisible = () => {
    setActive(false);

    const espera = setTimeout(() => {
      setVisible(false);
    }, 700);
  };

  
  return (
    <div
      className={`${styles["nav-container"]} ${active ? styles.active : ""}`}
      style={{scrollBehavior: 'smooth'}}
    >
      <div
        className={`${styles["icon-container"]} ${
          visible ? styles.visible : ""
        }`}
      >
        <FontAwesomeIcon
          onClick={handleActive}
          icon={faChevronLeft}
          className={styles["icono-left"]}
        />
      </div>
      <nav>
        <Link href={"#banner"} onClick={handleVisible}>
          Home
        </Link>
        <Link href={"#about"} onClick={handleVisible}>About</Link>
        <Link href={"#projects"} onClick={handleVisible}>Projects</Link>
        <Link href={"#contact"} onClick={handleVisible}>Contact</Link>
      </nav>
      <FontAwesomeIcon
        onClick={handleVisible}
        icon={faChevronRight}
        className={styles["icono-right"]}
      />
    </div>
  );
};
