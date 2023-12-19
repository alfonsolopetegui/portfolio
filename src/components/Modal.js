import styles from "../styles/modal.module.css";
//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const Modal = ({ handler, text }) => {
  return (
    <div className={styles["modal-wrapper"]}>
      <div className={styles["modal-container"]}>
        <FontAwesomeIcon icon={faCircleCheck} className={styles["icono"]}/>
        <h2>{text}</h2>
        <button onClick={handler}>Ok</button>
      </div>
    </div>
  );
};
