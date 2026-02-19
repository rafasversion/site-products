import React from "react";
import contato from "../img/contato.png";
import Head from "./Head";
import styles from "./Contato.module.css";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={contato} alt="" />
      <div>
        <h3>Entre em contato.</h3>
        <ul className={styles.dados}>
          <li>rafa@gmail.com</li>
          <li>99999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
