"use client";
import styles from "../styles/contact.module.css";

import emailjs from "@emailjs/browser";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";

import { useRef, useState, useEffect } from "react";
import { Modal } from "./Modal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  

  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useRef();

  useEffect(() => {
    // Aplicar estilos al cuerpo cuando el modal esté abierto
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_63sf6xs",
        "template_ofziqc7",
        form.current,
        "wUVllJ8RUd7AkFFh1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsModalOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmail("");
    setMessage("");
    setName("");
    
  };

  const closeModal = () => {
    // Cierra el modal y restablece el estado del cuerpo
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className={styles["contact-container"]} id="contact">
        <h1 className={styles["contact-title"]}>Contact</h1>
        <div className={styles["form-container"]}>
          <form
            className={styles["contact-form"]}
            ref={form}
            onSubmit={handleSubmit}
          >
            <div className={styles["form-inputs"]}>
              <div className={styles["form-field"]}>
                <input
                  autoComplete="off"
                  type="text"
                  name="user_name"
                  id="user_name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className={styles["form-field"]}>
                <input
                  autoComplete="off"
                  type="email"
                  name="user_email"
                  id="user_email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>

            <div className={styles["textarea-container"]}>
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button>Send Message</button>
          </form>
          <div className={styles["contacts"]}>
            <div className={styles["contact-icon"]}>
              <FontAwesomeIcon icon={faHouse} className={styles["icono"]} />
              <h4>Buenos Aires, Argentina</h4>
            </div>
            <div className={styles["contact-icon"]}>
              <FontAwesomeIcon icon={faWhatsapp} className={styles["icono"]} />
              <h4>+52 221 4188292</h4>
            </div>
            <div className={styles["contact-icon"]}>
              <FontAwesomeIcon icon={faEnvelope} className={styles["icono"]} />
              <h4>alfonsolopetegui@hotmail.com</h4>
            </div>
            <div className={styles["contact-icon"]}>
              <FontAwesomeIcon icon={faGithub} className={styles["icono"]} />
              <h4>https://github.com/alfonsolopetegui</h4>
            </div>
            <div className={styles["contact-icon"]}>
              <FontAwesomeIcon icon={faLinkedin} className={styles["icono"]} />
              <h4>linkedin.com/in/alfonso-lopetegui-42702a277</h4>
            </div>
          </div>
        </div>
      </div>
       {/* Mostrar el modal cuando isModalOpen es true */}
    {isModalOpen && (
      <Modal handler={closeModal} text={'Message send!'}/>
    )}
    </>
  );
};

export default Contact;
