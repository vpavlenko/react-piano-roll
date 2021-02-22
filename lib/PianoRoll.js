import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import pixiPianoRoll from "./pixiPianoRoll.js";

const PianoRoll = (props, playbackRef) => {
  const container = useRef();

  const pianoRoll = pixiPianoRoll(props);

  useImperativeHandle(playbackRef, () => pianoRoll.playback)

  useEffect(() => {
    container.current.appendChild(pianoRoll.view);
  }, [pianoRoll.view]);

  return <div ref={container} />;
};

export default forwardRef(PianoRoll);
