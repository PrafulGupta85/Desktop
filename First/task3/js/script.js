// key="A" http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav
// key="w" http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav
// key="S" http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav
// key="E" http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav
// key="D" http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav
// key="F" http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav
// key="R" http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav
// key="G" http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav
// key="T" http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav
// key="H" http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav
// key="Y" http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav
// key="J" http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav
// key="K" http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav
// key="U" http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav
// key="L" http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav
// key="I" http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav
// key=";" http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav

const button = document.querySelector(".a");

const a = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav"
);
const w = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav"
);
const ebtn = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav"
);
const r = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav"
);
const t = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav"
);
const y = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav"
);
const u = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav"
);
const i = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav"
);
const s = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav"
);
const d = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav"
);
const f = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav"
);
const g = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav"
);
const h = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav"
);
const j = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav"
);
const k = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav"
);
const l = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav"
);
const semicol = new Audio(
  "http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"
);

const aBtn = document.querySelector(".a");

document.addEventListener("keydown", function (e) {
  console.log("Key - ", e.key);
  switch (e.key) {
    case "a":
    case "A":
      a.play();
      break;

    case "s":
    case "S":
      s.play();
      break;

    case "d":
    case "D":
      d.play();
      break;
    case "f":
    case "F":
      f.play();
      break;
    case "g":
    case "G":
      g.play();
      break;
    case "h":
    case "H":
      h.play();
      break;
    case "j":
    case "J":
      j.play();
      break;
    case "k":
    case "K":
      k.play();
      break;
    case "l":
    case "L":
      l.play();
      break;
    case "w":
    case "W":
      w.play();
      break;
    case "e":
    case "E":
      ebtn.play();
      break;
    case "r":
    case "R":
      r.play();
      break;
    case "t":
    case "T":
      t.play();
      break;
    case "y":
    case "Y":
      y.play();
      break;
    case "u":
    case "U":
      u.play();
      break;
    case "i":
    case "I":
      i.play();
      break;
    case ";":
      semicol.play();
      break;
  }
});

// document.addEventListener("onclick", function (e) {
//   console.log("Key pressed", e.key);
//   switch (e.key) {
//     case "a":
//       a.play();
//       break;
//     case "s":
//       s.play();
//       break;
//     case "d":
//       d.play();
//       break;
//     case "f":
//       f.play();
//       break;
//     case "g":
//       g.play();
//       break;
//     case "h":
//       h.play();
//       break;
//     case "j":
//       j.play();
//       break;
//     case "k":
//       k.play();
//       break;
//     case "l":
//       l.play();
//       break;
//     case "semicol":
//       semicol.play();
//       break;
//   }
// });
