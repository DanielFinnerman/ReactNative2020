import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { PropTypes } from "prop-types";

const ListItem = ({ singleMedia }) => {
  return (
    <TouchableOpacity style={styles.flex}>
      <Image style={styles.image} source={{ uri: item.thumbnails.w160 }} />
      <View style={styles.text}>
        <Text style={{ fontSize: "1.5em", fontWeight: "bold" }}>
          {item.title}
        </Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object
};

export default ListItem;

const styles1 = StyleSheet.create({
  flex: {
    flexDirection: "row",
    padding: "5px",
    marginBottom: 5,
    backgroundColor: "#aaa",
    padding: "2px",
    flex: 1
  },

  text: {
    flexShrink: 1,
    margin: 5
  },

  image: {
    flexGrow: 1,
    minHeight: 160,
    minWidth: 160,
    margin: 5
  }
});