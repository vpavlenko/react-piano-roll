import React, { useRef, useEffect } from "react";
import pixiPianoRoll from "./pixiPianoRoll.js";

var PianoRoll = function PianoRoll(props) {
  var container = useRef();
  var pianoRoll = pixiPianoRoll(props);
  window.pianoRoll = pianoRoll;
  useEffect(function () {
    container.current.appendChild(pianoRoll.view);
  });
  return React.createElement("div", {
    ref: container
  });
};

export default PianoRoll;