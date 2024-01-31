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
  const [isHovered, setIsHovered] = useState(false);

  const handleTitleHover = () => {
    setIsHovered(true);
  };

  const handleTitleLeave = () => {
    setIsHovered(false);
  };

  const handleDownloadHover = () => {
    setIsHovered(true);
  };

  const handleDownloadLeave = () => {
    setIsHovered(false);
  };

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
    <div style={montserrat.style} className={styles["banner-container"]}>
      <div
        className={styles["title"]}
        title="Hover para mostrar el botón de descarga"
        onMouseEnter={handleTitleHover}
        onMouseLeave={handleTitleLeave}
      >
        <h1>ALFONSO LOPETEGUI</h1>
        <h2>FULL STACK DEVELOPER</h2>
      </div>
      <div
        className={`${styles["download"]} `}
        onClick={handleDownloadClick}
        
      >
        Spanish CV
      </div>

      <div
        className={`${styles["download-eng"]} `}
        onClick={handleDownloadClickEng}
        
      >
        English CV
      </div>
      <div className={styles["nav-wrapper"]}>
        <Nav />
      </div>
      <div className={styles["icon-container"]}>
        <FontAwesomeIcon
          icon={faCircleArrowDown}
          className={styles["icon"]}
        />
      </div>
    </div>
  );
};
