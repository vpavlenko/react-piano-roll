import React, { useRef, useEffect } from "react";
import pixiPianoRoll from "./pixiPianoRoll.js";

const PianoRoll = props => {
  const container = useRef();

  const pianoRoll = pixiPianoRoll(props);
  window.pianoRoll = pianoRoll;

  useEffect(() => {
    container.current.appendChild(pianoRoll.view);
  });

  return <div ref={container} />;
};

export default PianoRoll;
