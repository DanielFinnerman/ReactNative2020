import React from "react";
import { View } from "react-native";
import List from "./components/List";
import { MediaProvider } from "./contexts/MediaContext";

const Home = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <List navigation={navigation}></List>
    </View>
  );
};

export default Home;
