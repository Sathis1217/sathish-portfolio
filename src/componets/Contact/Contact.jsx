import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Contact.module.css'


const Contact = () => {
    return (
      <footer id="contact" className={styles.container}>
        <div className={styles.text}><h2>Contact</h2>
        <p>Feel to reach me!</p></div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/email.png")} alt="email icon" />
                <a href="mailto:sathish121712@gmail.com">sathish121712@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin.png")} alt="linkedin icon" />
                <a href="https://www.linkedin.com/in/sathish-kumar-s-074214244/">linkedin.com/in/sathish-kumar-s-074214244</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/github.png")} alt="email icon" />
                <a href="https://github.com/">github.com/sathish</a>
            </li>
        </ul>
      </footer>
    );
};

export default Contact;
