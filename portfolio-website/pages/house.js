import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import ClockHouse from "../components/clock-house";
import { confettiExplosion } from "../components/confetti";

export default function House() {

  return (
    <div className={styles.container} style={{background: "#FFF4E4"}}>
      <Head>
        <title>Kim + Jarno</title>
        <meta name="description" content="" />
        <link rel="icon" href="/heart.png" />
      </Head>

      <main className={styles.main}>
        <div>  
            <img
                className="w-24 md:w-72 lg:w-96 transform transition duration-1000 hover:scale-110"
                src="house.png"
                onClick={confettiExplosion}
            />
        </div>
        <ClockHouse/>

      </main>
    </div>
  );
}
