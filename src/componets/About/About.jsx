import React from "react";
import styles from './About.module.css';
import { getImageUrl } from "../../utils";

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl('about/mine2.png')} 
                    alt="cursor pointing" 
                    className={styles.aboutimage}
                />

                <ul className={styles.aboutitems}>
                    <li className={styles.aboutitem}>
                        <img src={getImageUrl('about/cursor.png')} alt="cursor pointing" />
                        <div className={styles.aboutitemtext}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I’m a front-end developer with experience in building responsive and optimized sites
                            </p>
                        </div>  
                    </li>

                    <li className={styles.aboutitem}>
                        <img src={getImageUrl('about/backend.png')} alt="Backend developer" />  
                        <div className={styles.aboutitemtext}>  
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing fast and optimised back-end systems and APIs
                            </p>  
                        </div>
                    </li>

                    <li className={styles.aboutitem}>
                        <img src={getImageUrl('about/ui.png')} alt="Ui developer" />    
                        <div className={styles.aboutitemtext}>
                            <h3>UI Designer</h3>
                            <p>
                                I have designed multiple landing pages and have created design systems as well
                            </p>  
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;
