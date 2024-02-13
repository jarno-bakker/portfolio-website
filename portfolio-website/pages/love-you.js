import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import Clock from "../components/clock";

export default function LoveYou() {
    
  return (
    <div className={styles.container} style={{background: "#fddfe4"}}>
      <Head>
        <title>Kim + Jarno</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>  
            <img
                className="w-24 md:w-72 lg:w-96 transform transition duration-1000 hover:scale-125"
                src="heart.png"
            />
        </div>
        <Clock/>

      </main>
    </div>
  );
}
