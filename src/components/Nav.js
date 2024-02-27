"use client";
import { useEffect, useState } from "react";
import styles from "../styles/nav.module.css";
import Link from "next/link";
import { Averia_Libre, Montserrat } from "next/font/google";

const averia = Averia_Libre({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export const Nav = () => {
  const [logoActive, setLogoActive] = useState(false);

  const handleActive = () => {
    setVisible(true);
    setActive(!active);
  };



  return (
    <div
      className={styles["nav-container"]}
      style={{ scrollBehavior: "smooth" }}
    >
      <div className={styles["logo-container"]}>
        <h3 className={`${styles["logo"]} ${montserrat.className}`}>ALFONSOLOPETEGUIDEV</h3>
      </div>

      <nav>
        <Link href={"#banner"}>
          HOME
        </Link>
        <Link href={"#about"}>
          ABOUT
        </Link>
        <Link href={"#projects"}>
          PROJECTS
        </Link>
        <Link href={"#contact"}>
          CONTACT
        </Link>
      </nav>
    </div>
  );
};
