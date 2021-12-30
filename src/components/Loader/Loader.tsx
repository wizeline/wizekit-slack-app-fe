import { Screen, ScreenBox } from "./Loader.styles";
import React from "react";
const Loader: React.FC = () => {
  return (
    <div>
      <Screen>
        <ScreenBox>
          <img
            src={require("../../assets/wizelinelogo.png")}
            alt="wizeline"
            height={80}
            width={80}
          />
          <div>Please standby ...</div>
        </ScreenBox>
      </Screen>
    </div>
  );
};

export default Loader;
