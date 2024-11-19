import { useState, useEffect } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";

const total = {
  body: 17,
  earings: 32,
  glasses: 17,
  hats: 28,
  neckwear: 18,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
  eyes: 24,
  eyebrows: 15,
  facialHair: 17,
  hair: 73,
  mouths: 24,
  noses: 1,
};
function App() {
  const [body, setBody] = useState(0);
  const [earings, setEarings] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [hats, setHats] = useState(0);
  const [neckwear, setNeckwear] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [eyebrows, setEyebrow] = useState(0);
  const [facialHair, setFacialHair] = useState(0);
  const [hair, setHair] = useState(0);
  const [mouths, setMouths] = useState(0);
  const [noses, setNoses] = useState(0);
  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEarings(Math.floor(Math.random() * total.earings));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setHats(Math.floor(Math.random() * total.hats));
    setNeckwear(Math.floor(Math.random() * total.neckwear));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
    setEyes(Math.floor(Math.random() * total.eyes));
    setEyebrow(Math.floor(Math.random() * total.eyebrows));
    setFacialHair(Math.floor(Math.random() * total.facialHair));
    setHair(Math.floor(Math.random() * total.hair));
    setMouths(Math.floor(Math.random() * total.mouths));
    setNoses(Math.floor(Math.random() * total.noses));
  };
  useEffect(() => {
    randomize();
  }, []);

  const functionList = [
    setBody,
    setEyes,
    setHair,
    setClothing1,
    setClothing2,
    setClothing3,
    setMouths,
    setEyebrow,
    setGlasses,
    setEarings,
    setNeckwear,
    setFacialHair,
    setNoses,
    setHats,
  ];
  const valueList = [
    body,
    eyes,
    hair,
    clothing1,
    clothing2,
    clothing3,
    mouths,
    eyebrows,
    glasses,
    earings,
    neckwear,
    facialHair,
    noses,
    hats,
  ];
  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <div>
          <div className="avatar-wrapper">
            <Avatar
              body={body}
              eyes={eyes}
              hair={hair}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
              mouths={mouths}
              eyebrow={eyebrows}
              glasses={glasses}
              earings={earings}
              neckwear={neckwear}
              facialHair={facialHair}
              noses={noses}
              hats={hats}
            />
            <div className="text-center">
              <button className="button" onClick={() => randomize()}>
                Randomize!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <PartList functionList={functionList} valueList={valueList} />
      </div>
    </div>
  );
}

export default App;
