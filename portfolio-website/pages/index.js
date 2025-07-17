import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSquareFacebook,
  faSquareGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


library.add(fab);

export default function Home() {
  function getAge(dateString) {
    var ageInMilliseconds = new Date() - new Date(dateString);
    return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years.
  }

  const handleClick = (destination) => {
    window.open(destination, '_blank', 'noopener,noreferrer')
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Jarno Bakker</title>
        <meta name="description" content="Kom in contact met Jarno Bakker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="group h-48 w-48 mb-8">
          <img
            className="inline-block rounded-full ring-2 ring-white"
            src="me.jpg"
            alt="Jarno Bakker"
          />
        </div>

        <div className="text-4xl font-bold flex mb-5">
          <h2 className="mr-2">Hi, </h2>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("aangenaam!").start();
            }}
          />
        </div>
        <h1 className="text-2xl text-center mb-10">
          Mijn naam is Jarno Bakker en ik ben {getAge("2001-06-26")} jaar oud.{" "}
          <br />
          Software engineer bij Omoda.
        </h1>
        <h3 className="text-2xl text-center font-bold">Links</h3>
        <div className="flex justify-center mb-10 ...">
          <div className="transform transition duration-200 hover:scale-125 flex-1 w-20 p-2 ...">
              <FontAwesomeIcon
                icon={faSquareFacebook}
                style={{ color: "#4267B2" }}
                size="4x"
                onClick={() => handleClick("https://www.facebook.com/jarno.bakker.520")}
              />
          </div>
          <div className="transform transition duration-200 hover:scale-125  flex-1 w-20 p-2 ...">
              <FontAwesomeIcon
                icon={faSquareGithub}
                style={{ color: "#333" }}
                size="4x"
                onClick={() => handleClick("https://github.com/Jarno123")}
              />
          </div>
          <div className="transform transition duration-200 hover:scale-125  flex-1 w-20 p-2 ...">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#0077b5" }}
                size="4x"
                onClick={() => handleClick("https://www.linkedin.com/in/jarnob/")}
              />
          </div>
          <div className="transform transition duration-200 hover:scale-125  flex-1 w-16 p-2 ...">
              <img
                className="mt-1 h-35 w-35 rounded-full"
                src="logo-VEDR-circel-zwart.png"
                alt="Vedr - Internetbureau in Zeeland"
                onClick={() => handleClick("https://www.vedr.nl/")}
              />
          </div>
        </div>
      </main>
    </div>
  );
}
