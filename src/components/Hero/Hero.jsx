import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ritik Singh </h1>
        <p className={styles.description}>
          I'm a full-stack developer.I have a good knowledge in React and
          NodeJS. Reach out if you like to konw more about me.
        </p>
        <a href="mailto:ritiksingh1809@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/MyImage.jpeg")}
        alt="my image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
