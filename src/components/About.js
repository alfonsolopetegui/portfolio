import styles from "../styles/about.module.css";
import Image from "next/image";

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
const inter = Inter({ subsets: ["latin"], weight: "700" })

export const About = () => {
  return (
    <div className={styles["about-container"]} style={montserrat.style} id="about">
      <h1 className={styles["about-title"]} style={inter.style}>About me...</h1>
      <section className={styles["about-resume"]}>
        <article className={styles["hi-there"]}>
          <h3>Hi there! </h3>
          <p>
            I´m a Front End Developer with around a year of experience in React
            and Next.I´m a Front End Developer with around a year of experience
            in React and Next.I´m a Front End Developer with around a year of
            experience in React and Next.I´m a Front End Developer with around a
            year of experience in React and Next.I´m a Front End Developer with
            around a year of experience in React and Next.
          </p>
          {/* <h4>Download my CV</h4>
          <div className={styles["btn-container"]}>
            <button>Spanish</button>
            <button>English</button>
          </div> */}
        </article>

        <article className={styles["fullstack"]}>
          <h3>Full stack development</h3>
          <section className={styles["icons"]}>
            <div className={styles["basic-icons"]}>
              <FontAwesomeIcon icon={faHtml5} className={styles["icono"]} />
              <FontAwesomeIcon icon={faCss3Alt} className={styles["icono"]} />
              <FontAwesomeIcon icon={faJs} className={styles["icono"]} />
            </div>
            <div className={styles["advanced-icons"]}>
              <FontAwesomeIcon icon={faReact} className={styles["icono"]} />
              <FontAwesomeIcon icon={faNodeJs} className={styles["icono"]} />
              <FontAwesomeIcon icon={faGit} className={styles["icono"]} />
              <Image
                src={"/nextjs-icon-svgrepo-com.svg"}
                width={50}
                height={50}
                alt="next-logo"
              />
            </div>
          </section>
        </article>
      </section>
    </div>
  );
};
