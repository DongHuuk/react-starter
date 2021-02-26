import React, { useState } from "react";
// import Info from "./Info";
import Counter from "./Counter";

const App = () => {
  // const [visiable, setVisiable] = useState(false);

  // return (
  //   <div>
  //     <button onClick={() => setVisiable(!visiable)}>
  //       {visiable ? "숨기기" : "보이기"}
  //     </button>
  //     {visiable && <Info />}
  //   </div>
  // );

  return <Counter />;
};

export default App;
