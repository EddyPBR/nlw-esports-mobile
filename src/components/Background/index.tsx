import type { FC, ReactNode } from "react";
import { ImageBackground } from "react-native";

import { styles } from "./styles";

import backgroundImg from "~assets/background-galaxy.png";

type Props = {
  children: ReactNode;
};

export const Background: FC<Props> = ({ children }) => {
  return (
    <ImageBackground
      source={backgroundImg}
      defaultSource={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
};
