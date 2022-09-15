import type { FC } from "react";
import { View, Text, ViewProps } from "react-native";

import { styles } from "./styles";

type Props = ViewProps & {
  title: string;
  subtitle: string;
};

export const Heading: FC<Props> = ({ title, subtitle, ...rest }) => {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
