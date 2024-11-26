import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import Clock from "../components/clock";
import { confettiAnimation, confettiExplosion } from "../components/confetti";

export default function LoveYou() {
  confettiAnimation(); //Only when its the anniversary date

  return (
    <div className={styles.container} style={{background: "#fddfe4"}}>
      <Head>
        <title>Kim + Jarno</title>
        <meta name="description" content="" />
        <link rel="icon" href="/heart.png" />
      </Head>

      <main className={styles.main}>
        <div>  
            <img
                className="w-24 md:w-72 lg:w-96 transform transition duration-1000 hover:scale-125"
                src="heart.png"
                onClick={confettiExplosion}
            />
        </div>
        <Clock/>

      </main>
    </div>
  );
}
