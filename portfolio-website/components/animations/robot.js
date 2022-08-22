import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/robot-assistant.json";

function Robot() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
}

export default Robot;
