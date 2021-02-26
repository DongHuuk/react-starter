import React, { useRef } from "react";
// import Info from "./Info";
import Average from "./Average";

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

  const refParents = useRef(null);

  return (
    <div>
      <Average ref={refParents} />;
      <button
        onClick={() => {
          refParents.f1();
        }}
      >
        test
      </button>
    </div>
  );
};

export default App;
