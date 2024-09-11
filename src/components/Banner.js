"use client";
import React, { useContext, useState } from "react";
import styles from "../styles/banner.module.css";
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
  faJava,
  faCss3Alt,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export const Banner = () => {
  const { isEnglish } = useContext(LanguageContext);

  const handleDownloadClick = () => {
    const pdfURL = isEnglish
      ? "https://firebasestorage.googleapis.com/v0/b/portfolio-621b9.appspot.com/o/FullstackresumeENG.pdf?alt=media&token=fdf1e11a-99cd-4881-999b-2c1ea6c4d4cf"
      : "https://firebasestorage.googleapis.com/v0/b/portfolio-621b9.appspot.com/o/resumefullstack.pdf?alt=media&token=46d4661f-a0f0-4f45-8909-3a292d44b946";

    window.open(pdfURL, "_blank");
  };


  return (
    <div className={`${styles["banner-container"]} ${montserrat.className}`}>
      <div className={styles["home-container"]}>
        <div className={styles["title"]}>
          <h5>
            {isEnglish
              ? "FULL STACK WEB DEVELOPER"
              : "DESARROLLADOR WEB FULL STACK"}
          </h5>
          <h1 className={montserrat.className}>
            {isEnglish ? "Alfonso Lopetegui" : "Alfonso Lopetegui"}
          </h1>
          <div className={styles["icon-container"]}>
            <FontAwesomeIcon icon={faJava} className={styles["icono"]} />
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

            <Image
              className={styles["icono"]}
              style={{ filter: "brightness(0) invert(1)" }}
              src={"/Spring_Boot.svg"}
              width={25}
              height={25}
              alt="next-logo"
            />
          </div>
        </div>

        <div className={styles["image-container"]}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-621b9.appspot.com/o/fotoCara.png?alt=media&token=6c10e93c-c1ef-45ce-9d2b-d404a7cc981f"
            width={350}
            height={350}
            quality={100}
          />
        </div>
      </div>
      <div className={styles["btn-container"]}>
        <button onClick={handleDownloadClick} className={montserrat.className}>
          {isEnglish ? "download CV" : "descargar CV"}
        </button>
      </div>
    </div>
  );
};
