"use client";
import React, { useState } from "react";
import styles from "../styles/banner.module.css";
import { Nav } from "./Nav";
import { Montserrat } from "next/font/google";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export const Banner = () => {
  const handleDownloadClick = () => {
    const pdfURL =
      "https://firebasestorage.googleapis.com/v0/b/portfolio-621b9.appspot.com/o/CV%20DEV%20ALopetegui%20Feb.pdf?alt=media&token=6929c17b-dbe0-4bfe-b49d-52def99d0cf7";

    window.open(pdfURL, "_blank");
  };

  const handleDownloadClickEng = () => {
    const pdfURL =
      "https://firebasestorage.googleapis.com/v0/b/portfolio-621b9.appspot.com/o/CV%20DEV%20Lopetegui%20English%20Feb.pdf?alt=media&token=9e5f82f5-fd54-42b5-b852-3a1a2548d0bb";

    window.open(pdfURL, "_blank");
  };

  return (
    <div className={`${styles["banner-container"]} ${montserrat.className}`}>

      <div className={styles["image-container"]}>
         <img src="programa1.jpg"></img>
      </div>



      <div className={styles["title"]}>
        <h5>FULL STACK DEVELOPER</h5>
        <h1 className={montserrat.className}>
          Desarrollo de aplicaciones web desde cero, con tecnologías
          JavasScript
        </h1>
        <button className={montserrat.className}>descargar CV</button>
      </div>


      {/* 
      <div className={`${styles["download"]} `} onClick={handleDownloadClick}>
        Spanish CV
      </div>

      <div
        className={`${styles["download-eng"]} `}
        onClick={handleDownloadClickEng}
      >
        English CV
      </div> */}

      {/* <div className={styles["icon-container"]}>
        <FontAwesomeIcon icon={faCircleArrowDown} className={styles["icon"]} />
      </div> */}
    </div>
  );
};
