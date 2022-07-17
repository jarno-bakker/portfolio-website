import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
library.add(fab);

export default function Home() {
  function getAge(dateString) {
    var ageInMilliseconds = new Date() - new Date(dateString);
    return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years.
  }

  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Jarno Bakker</title>
        <meta name="description" content="Kom in contact met Jarno Bakker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          className="transition border-8 border-transparent hover:border-blue-500 inline-block h-48 w-48 rounded-full ring-2 ring-white mb-6"
          src="me.jpg"
          alt="Jarno Bakker"
        />

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
          Student Toegepaste Informatica op AP Hogeschool Antwerpen.
        </h1>
        <h3 className="text-2xl text-center font-bold">Links</h3>

        <div className="flex justify-center mb-10 ...">
          <div className="transform transition duration-200 hover:scale-125 flex-1 w-20 p-2 ...">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/jarno.bakker.520"
            >
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                style={{ color: "#4267B2" }}
              />
            </a>
          </div>
          <div className="transform transition duration-200 hover:scale-125  flex-1 w-20 p-2 ...">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Jarno123"
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                style={{ color: "#333" }}
              />
            </a>
          </div>
          <div className="transform transition duration-200 hover:scale-125  flex-1 w-20 p-2 ...">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jarnob/"
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                style={{ color: "#0077b5" }}
              />
            </a>
          </div>
          <div className="transform transition duration-200 hover:scale-125  flex-1 w-20 p-2 ...">
            <button type="button" onClick={() => setShowModal(true)}>
              <FontAwesomeIcon
                icon={faFileLines}
                style={{ width: "48px", color: "#F6725D" }}
              />
            </button>
          </div>
          <div className="transform transition duration-200 hover:scale-125  flex-1 w-20 p-2 ...">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.vedr.nl/"
            >
              <img
                className="-ml-4 mt-1 h-35 w-35 rounded-full"
                src="logo-VEDR-circel-zwart.png"
                alt="Vedr - Internetbureau in Zeeland"
              />
            </a>
          </div>
        </div>

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 focus:outline-none">
              <div className="relative my-6 mx-auto w-screen">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*body*/}
                  <div className="relative p-6 flex-auto h-screen">
                    <object
                      data="CV-2022.pdf"
                      type="application/pdf"
                      width="100%"
                      height="100%"
                    >
                      <p>
                        Alternative text - include a link{" "}
                        <a href="http://africau.edu/images/default/sample.pdf">
                          to the PDF!
                        </a>
                      </p>
                    </object>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-20 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </main>
    </div>
  );
}
