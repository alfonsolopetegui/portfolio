"use client";
import styles from "../styles/about.module.css";
import Image from "next/image";
import React, { useContext, useEffect, useRef } from "react";
import LanguageContext from "@/context/languajeContext";

import { Montserrat, Inter } from "next/font/google";

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
const inter = Inter({ subsets: ["latin"], weight: "700" });

export const About = () => {
  const { isEnglish } = useContext(LanguageContext);
  const fullstackRef = useRef(null);
  const hiThereRef = useRef(null);

  useEffect(() => {
    const hiThereElement = hiThereRef.current;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const elementTop = hiThereElement.getBoundingClientRect().top;

      if (elementTop < windowHeight * 0.75) {
        hiThereElement.classList.add(styles["hi-there-animation"]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fullstackElement = fullstackRef.current;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const elementTop = fullstackElement.getBoundingClientRect().top;

      if (elementTop < windowHeight * 0.75) {
        fullstackElement.classList.add(styles["fullstack-animation"]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles["about-container"]} id="about">
      <h1 className={`${styles["about-title"]} ${montserrat.className}`}>
        {isEnglish ? "About me..." : "Sobre mi..."}
      </h1>
      <section className={styles["about-resume"]}>
        <article ref={hiThereRef} className={styles["hi-there"]}>
          <h3 className={montserrat.className}>
            {isEnglish ? "Hi there!" : "Hola!"}{" "}
          </h3>
          <p className={montserrat.className}>
            {isEnglish
              ? `I am a Front-End Developer with approximately one year of experience
            in React and Next js. I have undergone a comprehensive course
            covering back-end fundamentals, including Express js and MongoDB,
            thereby completing proficiency in the MERN stack. I have found the
            coding world to be incredibly exciting, and I am always eager to
            learn new technologies. Currently, I am studying SQL and TypeScript,
            strengthening my foundation in Node.js and Express, and exploring
            various UI libraries. I am looking forward to taking on new
            challenges and opportunities.`
              : "Soy un desarrollador Front-End con aproximadamente un año de experiencia en React y Next.js. He realizado un curso exhaustivo que cubre los fundamentos del back-end, incluyendo Express.js y MongoDB, completando así mi competencia en el stack MERN. He encontrado el mundo de la programación increíblemente emocionante, y siempre estoy ansioso por aprender nuevas tecnologías. Actualmente, estoy estudiando SQL y TypeScript, fortaleciendo mis bases en Node.js y Express, y explorando diversas bibliotecas de interfaz de usuario. Estoy ansioso por asumir nuevos desafíos y oportunidades."}
          </p>
        </article>

        <article ref={fullstackRef} className={styles["fullstack"]}>
          <h3 className={montserrat.className}>{isEnglish ? 'Full stack development': 'Desarrollo Full stack'}</h3>
          <section className={styles["icons"]}>
            <div className={styles["basic-icons"]}>
              <FontAwesomeIcon icon={faHtml5} className={styles["icono"]} />
              <FontAwesomeIcon icon={faCss3Alt} className={styles["icono"]} />
              <FontAwesomeIcon icon={faJs} className={styles["icono"]} />
            </div>
            <div className={styles["advanced-icons"]}>
              <FontAwesomeIcon icon={faReact} className={styles["icono"]} />
              <FontAwesomeIcon icon={faNodeJs} className={styles["icono"]} />
            </div>
            <div className={styles["advanced-icons"]}>
              <FontAwesomeIcon icon={faGit} className={styles["icono"]} />
              <Image
                className={styles["icono"]}
                style={{ filter: "brightness(0) invert(1)" }}
                src={"/nextjs-icon-svgrepo-com.svg"}
                width={90}
                height={90}
                alt="next-logo"
              />
            </div>
          </section>
        </article>
      </section>
    </div>
  );
};
