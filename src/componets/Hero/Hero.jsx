import React from "react";
import styles from './Hero.module.css';
import { getImageUrl } from "../../utils";

 const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Sathish</h1>
                <p className={styles.description}>
                    I'm a Software Engineer, with 6 months of experience. Reach out if you'd like to learn more!
                </p>
                <a href="mailto:sathishkumar2k1@gmail.com" className={styles.contactbtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/mine.jpg")} alt="hero image of me" className={styles.heroImg} />
            <div className={styles.topblur}/>
            <div className={styles.bottomblur}/>
        </section>
    );
};
export default Hero;