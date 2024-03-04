"use client";
import React, { useContext, useState } from "react";
import styles from "../styles/banner.module.css";
import { Nav } from "./Nav";
import { Montserrat } from "next/font/google";
import LanguageContext from "@/context/languajeContext";
import Image from "next/image";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faNodeJs,
  faCss3Alt,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export const Banner = () => {
  const { isEnglish } = useContext(LanguageContext);

  const handleDownloadClick = () => {
    const pdfURL =
      "https://firebasestorage.googleapis.com/v0/b/portfolio-621b9.appspot.com/o/CV%20Alfonso%20Lopetegui.pdf?alt=media&token=7a1dc07b-3491-4839-8c6f-f46cb3e18f9b";

    window.open(pdfURL, "_blank");
  };

  const handleDownloadClickEng = () => {
    const pdfURL =
      "https://firebasestorage.googleapis.com/v0/b/portfolio-621b9.appspot.com/o/CV%20Alfonso%20Lopetegui.pdf?alt=media&token=7a1dc07b-3491-4839-8c6f-f46cb3e18f9b";

    window.open(pdfURL, "_blank");
  };

  return (
    <div className={`${styles["banner-container"]} ${montserrat.className}`}>
      <div className={styles["image-container"]}>
        <img src="programa1.jpg"></img>
      </div>

      <div className={styles["title"]}>
        <h5>FULL STACK WEB DEVELOPER</h5>
        <h1 className={montserrat.className}>
          {isEnglish ? "ALFONSO LOPETEGUI" : "ALFONSO LOPETEGUI"}
        </h1>
        <div className={styles["icon-container"]}>
          <FontAwesomeIcon icon={faJs} className={styles["icono"]} />
          <FontAwesomeIcon icon={faReact} className={styles["icono"]} />
          <FontAwesomeIcon icon={faNodeJs} className={styles["icono"]} />
          <Image
            className={styles["icono"]}
            style={{ filter: "brightness(0) invert(1)" }}
            src={"/nextjs-icon-svgrepo-com.svg"}
            width={25}
            height={25}
            alt="next-logo"
          />
        </div>
        <button onClick={handleDownloadClick} className={montserrat.className}>
          {isEnglish ? "download CV" : "descargar CV"}
        </button>
      </div>
    </div>
  );
};
