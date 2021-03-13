import React, { createContext, useState } from "react";

// createContext 의 구조는 실제로 아래에서 value로 호출하는 객체와 동일한 형태인게 좋다
// 실수로 Provider를 사용하지 않았을때 에러가 나지 않는다.
const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  // state와 actions 객체를 따로따로 분리를 해주면 나중에 다른 컴포넌트에서 Context 값을 사용할때 편하다
  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// === const ColorConsumer = ColorContext.Consumer
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider, ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
