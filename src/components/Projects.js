"use client";
import styles from "../styles/projects.module.css";

import { Montserrat } from "next/font/google";
import { useContext, useEffect, useRef, useState } from "react";
import LanguageContext from "@/context/languajeContext";

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
  const { isEnglish } = useContext(LanguageContext);
  const projectsRef = useRef(null);

  const [viewAll, setViewAll] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const [data, setData] = useState([]);

  const [visibleProjectIndex, setVisibleProjectIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (projectsRef.current) {
        const rect = projectsRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < windowHeight) {
          // Mostrar el próximo proyecto solo si todos los proyectos anteriores ya se han mostrado
          if (visibleProjectIndex < data.length - 1) {
            setVisibleProjectIndex((prevIndex) => prevIndex + 1);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleProjectIndex, data]);

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
    if (selectedImage < selectedProject.images.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else {
      setSelectedImage(0);
    }
  };

  const handleImageDown = () => {
    if (selectedImage === 0) {
      setSelectedImage(selectedProject.images.length - 1);
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
        {isEnglish ? "Projects" : "Proyectos"}
      </h1>
      {viewAll ? (
        <section
          className={styles["project-container"]}
          style={montserrat.style}
        >
          {data &&
            data.slice(0, visibleProjectIndex + 1).map((project, i) => {
              return (
                <article
                  className={`${styles["project"]} ${styles["project-enter"]}`}
                  key={i}
                  onClick={() => handleProject(project)}
                >
                  <div className={styles["project-img-container"]}>
                    <img src={project.images[0]} />
                  </div>

                  <div className={styles["project-text-container"]}>
                    <h1>{project.name.toUpperCase()}</h1>
                    <div className={styles["project-tech"]}>
                      <h3>{project.technologies.join(" ")}</h3>
                    </div>
                  </div>
                </article>
              );
            })}
        </section>
      ) : (
        <div className={styles["view-container"]}>
          <div className={styles["image-container"]}>
            <img src={selectedProject.images[selectedImage]} />
            <FontAwesomeIcon
              onClick={handleImageDown}
              icon={faChevronLeft}
              className={styles["btn-image-down"]}
            />
            <FontAwesomeIcon
              onClick={handleImageUp}
              icon={faChevronRight}
              className={styles["btn-image-up"]}
            />
          </div>
          <div className={styles["text-container"]}>
            <h4>{selectedProject.name}</h4>
            <p>{isEnglish ? selectedProject.description : selectedProject.descriptionSpa}</p>
            {console.log(selectedProject)}
            {selectedProject.page && (
              <p onClick={handleVisit} className={styles["page-link"]}>
                {selectedProject.page}
              </p>
            )}
            {selectedProject.user && <p>{selectedProject.user}</p>}
            <button onClick={handleGoBack}>{isEnglish ? 'Close' : 'Cerrar'}</button>
          </div>
        </div>
      )}
    </div>
  );
};
