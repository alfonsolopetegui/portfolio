"use client";
import styles from "../styles/projects.module.css";

import { Montserrat } from "next/font/google";
import { useEffect, useRef, useState } from "react";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

//Firebase
import firebaseApp from "../../firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const db = getFirestore(firebaseApp);

const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

export const Projects = () => {
  const projectsRef = useRef(null);

  const [viewAll, setViewAll] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    const projectsData = async () => {
      try {
        const projects = collection(db, "projects");
        const projectsSnapshot = await getDocs(projects);
        const projectsList = projectsSnapshot.docs.map((doc) => doc.data());
        setData(projectsList);
        // return projectsList;
        console.log(projectsList);
      } catch (error) {
        console.log(error);
      }
    };
    projectsData();
  }, []);

  const handleProject = (project) => {
    setViewAll(false);
    setSelectedProject(project);

    // Desplazarse hacia la sección de proyectos
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
    <div
      className={styles["projects-container"]}
      id="projects"
      ref={projectsRef}
    >
      <h1 className={`${styles["projects-title"]} ${montserrat.className}`}>
        Projects
      </h1>
      {viewAll ? (
        <section
          className={styles["project-container"]}
          style={montserrat.style}
        >
          {data &&
            data.map((project, i) => {
              return (
                <article
                  className={styles["project"]}
                  key={i}
                  onClick={() => handleProject(project)}
                >
                  <div className={styles["project-img-container"]}>
                    <img src={project.images[0]} />
                  </div>

                  <div className={styles["project-text-container"]}>
                    <h1>{project.name.toUpperCase()}</h1>
                    
                  </div>
                </article>
              );
            })}
        </section>
      ) : (
        <div className={styles["view-container"]}>
          <div className={styles["image-container"]}>
            <img src={selectedProject.images[selectedImage]}></img>
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
