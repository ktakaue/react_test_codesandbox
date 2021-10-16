import React, { useState } from "react";
import ColorfulMessage from "./components/ColortfulMesage";
const App = () => {
  const onClickCountUp = () => setNum(num + 1);
  const [num, setNum] = useState(0);

  return (
    <>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <p>{num}</p>
    </>
  );
};

export default App;
