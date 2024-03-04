"use client";
import { useContext, useEffect, useState } from "react";
import styles from "../styles/nav.module.css";
import Link from "next/link";
import { Averia_Libre, Montserrat } from "next/font/google";
import LanguageContext from "@/context/languajeContext";

import { Twirl as Hamburger } from "hamburger-react";

const averia = Averia_Libre({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export const Nav = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [logoActive, setLogoActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const { isEnglish, setIsEnglish } = useContext(LanguageContext);

  const handleClose = () => {
    console.log("handleClose");
    if (window.innerWidth < 900) {
      setNavVisible(false);
    }
    // setNavVisible(false);
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const isScreen900px = window.matchMedia("(min-width: 900px)").matches;
      setNavVisible(isScreen900px);
    };

    handleResize(); // Run once initially to set navVisible
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("navVisible", navVisible);
  console.log("isOpen", isOpen);

  const handleSpanish = () => {
    setIsEnglish(false);
  };

  const handleEnglish = () => {
    setIsEnglish(true);
  };

  return (
    <div
      className={styles["nav-container"]}
      style={{ scrollBehavior: "smooth" }}
    >
      <div className={styles["logo-container"]}>
        <h3 className={`${styles["logo"]} ${montserrat.className}`}>
          ALFONSOLOPETEGUIDEV
        </h3>
      </div>
      <div className={styles["right-nav-container"]}>
        <div
          className={styles["hamburger-container"]}
          style={{ zIndex: "20", paddingRight: "30px" }}
        >
          <Hamburger
            rounded
            color="white"
            toggled={isOpen}
            toggle={setOpen}
            onToggle={(toggled) => {
              if (toggled) {
                setNavVisible(true);
              } else {
                setNavVisible(false);
              }
            }}
          />
        </div>
        {navVisible && (
          <nav>
            <div onClick={handleClose} className={styles["nav-link"]}>
              <Link href={"#banner"} style={{ color: "#24d4d0" }}>
                HOME
              </Link>
            </div>
            <div onClick={handleClose} className={styles["nav-link"]}>
              <Link href={"#about"}>{isEnglish ? "ABOUT" : "SOBRE MI"}</Link>
            </div>
            <div onClick={handleClose} className={styles["nav-link"]}>
              <Link href={"#projects"}>
                {isEnglish ? "PROJECTS" : "PROYECTOS"}
              </Link>
            </div>
            <div onClick={handleClose} className={styles["nav-link"]}>
              <Link href={"#contact"}>{isEnglish ? 'CONTACT' : 'CONTACTO'}</Link>
            </div>
          </nav>
        )}
        <div className={styles["language-btn-container"]}>
          <h4
            onClick={handleSpanish}
            className={`${styles["language-btn"]} ${
              isEnglish === false ? styles["selected"] : ""
            }`}
          >
            ES
          </h4>
          <h4
            onClick={handleEnglish}
            className={`${styles["language-btn"]} ${
              isEnglish === true ? styles["selected"] : ""
            }`}
          >
            EN
          </h4>
        </div>
      </div>
    </div>
  );
};
