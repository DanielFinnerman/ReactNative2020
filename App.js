import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import List from "./components/List";

const mediaArray = [
  {
    key: "0",
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.",
    thumbnails: {
      w160: "http://placekitten.com/160/161"
    },
    filename: "http://placekitten.com/2048/1920"
  },
  {
    key: "1",
    title: "Title 2",
    description:
      "Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ",
    thumbnails: {
      w160: "http://placekitten.com/160/162"
    },
    filename: "http://placekitten.com/2041/1922"
  },
  {
    key: "2",
    title: "Title 3",
    description:
      "Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ",
    thumbnails: {
      w160: "http://placekitten.com/160/163"
    },
    filename: "http://placekitten.com/2039/1920"
  }
];

const App = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        style={{
          height: 160,
          flexGrow: 1,
          minHeight: 300,
          minWidth: 500,
          margin: 5
        }}
        source={{
          uri:
            "https://www.fairfaxcounty.gov/news2/wp-content/uploads/2018/01/dog-nose.jpg"
        }}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <List mediaArray={mediaArray} />
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "red" translucent = {true}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    fontSize: "1em",
    justifyContent: "center",
    alignItems: "center"
  },
  flex: {
    flexDirection: "row",
    padding: "5px",
    marginBottom: 5,
    backgroundColor: "#aaa",
    padding: "2px",
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    flexShrink: 1,
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  image: {
    flexGrow: 1,
    minHeight: 160,
    minWidth: 160,
    margin: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
