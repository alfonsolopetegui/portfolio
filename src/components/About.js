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
const inter = Inter({ subsets: ["latin"], weight: "700" });

export const About = () => {
  return (
    <div
      className={styles["about-container"]}
      style={montserrat.style}
      id="about"
    >
      <h1 className={styles["about-title"]} style={inter.style}>
        About me...
      </h1>
      <section className={styles["about-resume"]}>
        <article className={styles["hi-there"]}>
          <h3>Hi there! </h3>
          <p>
            {`I am a Front-End Developer with approximately one year of experience
  in React and Next.js. I have undergone a comprehensive course
  covering back-end fundamentals, including Express.js and MongoDB,
  thereby completing proficiency in the MERN stack. I've found the
  coding world to be incredibly exciting, and I'm always eager to
  learn new technologies. Currently, I'm studying SQL, strengthening
  my foundation in Node.js and Express, and exploring various UI
  libraries. I'm looking forward to taking on new challenges and
  opportunities to gain more experience.`}
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
