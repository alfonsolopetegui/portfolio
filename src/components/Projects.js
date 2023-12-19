"use client";
import styles from "../styles/projects.module.css";

import { Montserrat } from "next/font/google";
import { useState } from "react";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

const projectsData = [
  {
    name: "Guitarra a la carta",
    url: ["/guitarra1.png", "/guitarra2.png", "/guitarra3.png"],
    description:
      "This was my first project—a landing page developed solely using HTML and CSS.",
  },
  {
    name: "Bar App",
    url: ["/barcito1.png", "/barcito2.png", "/barcito3.png"],
    description:
      "I was commissioned to develop a Bar App using Next.js. The login system and database were implemented using Firebase. The app is designed for easy management of tables and delivery. Additionally, it includes an administrator page for creating and editing products and users.",
    page: "https://mercadito-react.vercel.app/",
    user: "User: visitor@gmail.com  Password: visitor123456",
  },
  {
    name: "Central Music",
    url: ["/central1.png", "/central2.png", "/central3.png"],
    description:
      "This was the final project for the Front End course. Developed in Next.js, the project is fully responsive, applying the mobile-first methodology. The design was taken from an existing one in Figma, and the backend was sourced from Jason Placeholder's Apifake.",
  },
  {
    name: "Travel Company",
    url: ["/viajes1.png", "/viajes2.png", "/viajes3.png"],
    description:
      "I undertook this project as a practice exercise, focusing on several aspects. For instance, I worked on implementing a login system, utilizing dynamic routes, and developing a payment platform.",
  },
];

export const Projects = () => {
  const [viewAll, setViewAll] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleProject = (project) => {
    setViewAll(false);
    setSelectedProject(project);
  };

  const handleGoBack = () => {
    setViewAll(true);
    setSelectedProject(null);
    setSelectedImage(0);
  };

  const handleImageUp = () => {
    if (selectedImage < 2) {
      setSelectedImage(selectedImage + 1);
    } else {
      setSelectedImage(0);
    }
  };

  const handleImageDown = () => {
    if (selectedImage === 0) {
      setSelectedImage(2);
    } else {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleVisit = () => {
    const pageURL = selectedProject.page;

    window.open(pageURL, "_blank");
  };

  return (
    <div className={styles["projects-container"]} id="projects">
      <h1 className={styles["projects-title"]}>Projects</h1>
      {viewAll ? (
        <section
          className={styles["project-container"]}
          style={montserrat.style}
        >
          {projectsData.map((project, i) => {
            return (
              <article
                className={styles["project"]}
                key={i}
                onClick={() => handleProject(project)}
              >
                <img src={project.url[0]}></img>
                <h4>{project.name}</h4>
              </article>
            );
          })}
        </section>
      ) : (
        <div className={styles["view-container"]}>
          <div className={styles["image-container"]}>
            <img src={selectedProject.url[selectedImage]}></img>
            <FontAwesomeIcon
              onClick={handleImageUp}
              icon={faChevronRight}
              className={styles["btn-image-up"]}
            />
            <FontAwesomeIcon
              onClick={handleImageDown}
              icon={faChevronLeft}
              className={styles["btn-image-down"]}
            />
          </div>
          <div className={styles["text-container"]}>
            <h4>{selectedProject.name}</h4>
            <p>{selectedProject.description}</p>
            {selectedProject.page && (
              <p onClick={handleVisit} className={styles["page-link"]}>
                {selectedProject.page}
              </p>
            )}
            {selectedProject.user && <p>{selectedProject.user}</p>}
            <button onClick={handleGoBack}>Go back</button>
          </div>
        </div>
      )}
    </div>
  );
};
