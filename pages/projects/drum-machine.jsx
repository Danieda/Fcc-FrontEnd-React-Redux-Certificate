import { useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import styles from "../../styles/drum.module.css"
import Link from 'next/link'

const displayTextSlice = createSlice({
  name: "displayText",
  initialState: {
    value: "Play Something!",
  },
  reducers: {
    setDisplayText: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { setDisplayText } = displayTextSlice.actions;

const store = configureStore({
  reducer: {
    displayText: displayTextSlice.reducer,
  },
});

function DrumPad(props) {
  const dispatch = useDispatch();
  function playAudio(id) {
    if (!id) {
      return;
    }
    const sound = document.getElementById(id);
    if (sound) {
      sound.currentTime = 0;
      sound.play();
      dispatch(setDisplayText(`You just played ${sound.src.split("/").pop()}`));
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", (e) => playAudio(e.key.toUpperCase()));
  }, []);
  return (
    <button
      id={"pad-" + props.trigger}
      className={styles.drumButton}
      onClick={() => playAudio(props.trigger)}
    >
      <audio id={props.trigger} className="clip" src={props.clip} />
      {props.trigger}
    </button>
  );
}

function DrumMachine() {
  const displayText = useSelector((state) => state.displayText.value);
  return (
    <div>
      <Link href="../" passHref>
        <a><h2>Back</h2></a>
      </Link>
      <hr />
      <header> <h1>Drum Machine</h1></header>
      <div id={styles.drumBG}>
        <div id={styles.drumBox}>
          <h2>Drum Machine Keys</h2>
          <div className="column"
            id={styles.drumMachine}>
            <div > <DrumPad
              trigger="Q"
              clip="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
            /></div>
            <DrumPad
              trigger="W"
              clip="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
            />
            <DrumPad
              trigger="E"
              clip="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
            />

            <DrumPad
              trigger="A"
              clip="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
            />
            <DrumPad
              trigger="S"
              clip="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
            />
            <DrumPad
              trigger="D"
              clip="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
            />
            <DrumPad
              trigger="Z"
              clip="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
            />
            <DrumPad
              trigger="X"
              clip="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
            />
            <DrumPad
              trigger="C"
              clip="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
            />
          </div>

          <div>      <h2

            id={styles.drumDisplay}
            className="text-2xl text-bold text-center col-span-2 row-span-3"
          >
            {displayText}
          </h2></div>
        </div>
      </div>
      <footer><a href="https://github.com/Danieda/Fcc-FrontEnd-React-Redux-Certificate"><h3>View Source</h3></a></footer>
    </div>

  );
}

export default function Drum() {
  return (
    <Provider store={store}>
      <DrumMachine />
    </Provider>
  );
}