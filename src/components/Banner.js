"use client";
import React, { useState } from "react";
import styles from "../styles/banner.module.css";
import { Nav } from "./Nav";
import { Montserrat } from "next/font/google";

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
   
    const pdfURL = "https://firebasestorage.googleapis.com/v0/b/portfolio-621b9.appspot.com/o/CV%20DEV%20AlfonsoLopetegui.pdf?alt=media&token=15d6e171-2e1d-411e-be34-4d7e2fe6f8d9";
    
    window.open(pdfURL, '_blank');
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
        <h2>FRONT END DEVELOPER</h2>
      </div>
      <div
        className={`${styles["download"]} ${
          isHovered ? styles["visible"] : ""
        }`}
        onClick={handleDownloadClick}
        onMouseEnter={handleDownloadHover}
        onMouseLeave={handleDownloadLeave}
      >
        Download CV
      </div>
      <div className={styles["nav-wrapper"]}>
        <Nav />
      </div>
      <div className={styles["cubo"]} draggable={true}></div>
      <div className={styles["cubo2"]}></div>
      <div className={styles["cubo3"]}></div>
      <div className={styles["cubo4"]}></div>
    </div>
  );
};
