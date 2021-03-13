import React from "react";
import Colorbox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColor from "./components/SelectColor";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColor />
        <Colorbox />
      </div>
    </ColorProvider>
  );
};

export default App;
