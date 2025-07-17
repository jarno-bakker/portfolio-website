import Head from "next/head";
import styles from "../styles/Home.module.css";
import { confettiAnimation } from "../components/confetti";
import React from "react";
import LoveYou from "./love-you";
import House from "./house";

export default function JarnoEnKim() {
  confettiAnimation(); //Only when its the anniversary date
  const [showLoveCounter, setShowLoveCounter] = React.useState(true);

  return (
    <>
      <Head>
        <title>Kim + Jarno</title>
        <meta name="description" content="" />
        <link rel="icon" href="/heart.png" />
      </Head>
      <main className="relative w-full h-screen">
        <div
          className="min-h-screen w-full relative overflow-hidden"
          style={{
            background: showLoveCounter ? "#FFF4E4" : "#fddfe4",
          }}
        >
          <div className="fixed top-0 left-0 z-50">
            <div className="flex items-center space-x-4 rounded-2xl p-2 sm:p-4">
              <button
                type="button"
                className={`w-14 h-14 sm:w-20 sm:h-20 cursor-pointer focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all duration-700 transform hover:scale-110 shadow-lg flex items-center justify-center text-2xl sm:text-4xl rounded-full ${
                  showLoveCounter
                    ? "bg-gradient-to-br from-blue-400 to-green-500 focus:ring-blue-300"
                    : "bg-gradient-to-br from-pink-400 to-red-500 focus:ring-pink-300"
                } ${
                  showLoveCounter
                    ? "rotate-0 scale-110"
                    : "rotate-180 scale-100"
                }`}
                role="switch"
                aria-checked={showLoveCounter}
                onClick={() => setShowLoveCounter(!showLoveCounter)}
              >
                <span
                  className={`transition-all duration-500 ${
                    showLoveCounter
                      ? "rotate-0 scale-100"
                      : "rotate-180 scale-110"
                  }`}
                >
                  {showLoveCounter ? "🏠" : "💖"}
                </span>
              </button>
            </div>
          </div>

          <div
            className={`absolute inset-0 w-full h-full transition-all duration-700 transform ${
              showLoveCounter
                ? "opacity-100 scale-100 translate-x-0"
                : "opacity-0 scale-95 -translate-x-full"
            }`}
          >
            <LoveYou />
          </div>

          <div
            className={`absolute inset-0 w-full h-full transition-all duration-700 transform ${
              !showLoveCounter
                ? "opacity-100 scale-100 translate-x-0"
                : "opacity-0 scale-95 translate-x-full"
            }`}
          >
            <House />
          </div>
        </div>
      </main>
    </>
  );
}
