"use client";
import { useEffect, useState } from "react";
import styles from "../styles/nav.module.css";
import Link from "next/link";
import { Averia_Libre, Montserrat } from "next/font/google";

import { Twirl as Hamburger } from "hamburger-react";

const averia = Averia_Libre({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export const Nav = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [logoActive, setLogoActive] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {

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
      <div className={styles["hamburger-container"]} style={{zIndex:'20', paddingRight:'30px'}}>
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
          <Link
            href={"#banner"}
            style={{ color: "#24d4d0" }}
            onClick={handleClose}
          >
            HOME
          </Link>
          <Link onClick={handleClose} href={"#about"}>
            ABOUT
          </Link>
          <Link onClick={handleClose} href={"#projects"}>
            PROJECTS
          </Link>
          <Link onClick={handleClose} href={"#contact"}>
            CONTACT
          </Link>
        </nav>
      )}
    </div>
  );
};
