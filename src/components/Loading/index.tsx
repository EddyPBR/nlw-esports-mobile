import type { FC } from "react";
import { View, ActivityIndicator } from "react-native";

import { styles } from "./styles";

import { THEME } from "~theme/index";

export const Loading: FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  );
};
