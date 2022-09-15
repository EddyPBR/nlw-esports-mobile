import { LinearGradient } from "expo-linear-gradient";
import type { FC } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  Text,
  TouchableOpacityProps,
  ImageSourcePropType,
} from "react-native";

import { styles } from "./styles";

import { THEME } from "~theme/index";

export type GameCardProps = {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
};

type Props = TouchableOpacityProps & {
  data: GameCardProps;
};

export const GameCard: FC<Props> = ({ data }) => {
  return (
    <TouchableOpacity>
      <ImageBackground style={styles.cover} source={data.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.ads}>{data.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};
