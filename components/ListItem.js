import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.flex}>
      <Image
        style={styles.image}
        source={{ uri: props.singleMedia.thumbnails.w160 }}
      />
      <View style={styles.text}>
        <Text style={{ fontSize: "1.5em", fontWeight: "bold" }}>
          {props.singleMedia.title}
        </Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

ListItem.propTypes = {
  singleMedia: PropTypes.object
};

export default ListItem;
