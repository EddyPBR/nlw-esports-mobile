import { FC } from "react";
import { View, Image, FlatList } from "react-native";

import { styles } from "./styles";

import logoImg from "~assets/background-galaxy.png";
import { GameCard } from "~components/GameCard";
import { Heading } from "~components/Heading";
import { GAMES } from "~utils/games";

export const Home: FC = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        horizontal
      />
    </View>
  );
};
