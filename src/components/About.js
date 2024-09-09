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
  faJava
} from "@fortawesome/free-brands-svg-icons";

import {
  faCircle
} from "@fortawesome/free-solid-svg-icons";

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
        {isEnglish ? "About me" : "Sobre mi"}
      </h1>
      <section className={styles["about-resume"]}>
        <article ref={hiThereRef} className={styles["hi-there"]}>
          <h3 className={montserrat.className}>
            {isEnglish ? "Hi there!" : "Hola!"}{" "}
          </h3>
          <section className={montserrat.className}>
            <p className={styles["icon-paragraph"]}>
              <FontAwesomeIcon icon={faCircle} width={10} className={styles["list-icon"]}/>
              {isEnglish
                ? "I´m a web developer with two yers of experience."
                : "Soy un desarrollador web con 2 años de experiencia programando."}
            </p>
            <p className={styles["icon-paragraph"]}>
              <FontAwesomeIcon icon={faCircle} width={10} className={styles["list-icon"]}/>
              {isEnglish
                ? "I have strong proficiency with frontend tools, primarily Next.js, focusing on optimization and user experience."
                : "Tengo buen manejo de herramientas frontend, principalmente NextJs, apuntando a la optimización y la experiencia de usuario."}
            </p>
            <p className={styles["icon-paragraph"]}>
              <FontAwesomeIcon icon={faCircle} width={10} className={styles["list-icon"]}/>
              {isEnglish
                ? "I use Java and the Spring ecosystem to create robust, secure REST APIs that provide useful responses to users."
                : "Utilizo java y el ecosistema Spring para crear APIs rest robustas, seguras y que den respuestas útiles a los usuarios."}
            </p>
            <p className={styles["icon-paragraph"]}>
              <FontAwesomeIcon icon={faCircle} width={10} className={styles["list-icon"]}/>
              {isEnglish
                ? "I am currently continuing my education in AWS, Docker, and Kubernetes."
                : "Actualmente continúo formandome, en AWS, Docker y Kubernetes."}
            </p>
          </section>
        </article>

        <article ref={fullstackRef} className={styles["fullstack"]}>
          <h3 className={montserrat.className}>
            {isEnglish ? "Full stack development" : "Desarrollo Full stack"}
          </h3>
          <section className={styles["icons"]}>
            
              <FontAwesomeIcon icon={faHtml5} className={styles["icono"]} />
              <FontAwesomeIcon icon={faCss3Alt} className={styles["icono"]} />
              <FontAwesomeIcon icon={faJs} className={styles["icono"]} />
              <FontAwesomeIcon icon={faReact} className={styles["icono"]} />
              <FontAwesomeIcon icon={faNodeJs} className={styles["icono"]} />
              <FontAwesomeIcon icon={faJava} className={styles["icono"]} />
              <FontAwesomeIcon icon={faGit} className={styles["icono"]} />
              <Image
                className={styles["icono"]}
                style={{ filter: "brightness(0) invert(1)" }}
                src={"/nextjs-icon-svgrepo-com.svg"}
                width={90}
                height={90}
                alt="next-logo"
              />

              <Image
                className={styles["icono"]}
                style={{ filter: "brightness(0) invert(1)" }}
                src={"/Spring_Boot.svg"}
                width={90}
                height={90}
                alt="next-logo"
              />
           
          </section>
        </article>
      </section>
    </div>
  );
};
