import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const ListItem = props => {
  return (
    <TouchableOpacity style={styles.flex}>
      <Image
        style={styles.image}
        source={{ uri: props.singleMedia.thumbnails.w160 }}
      />
      <View style={styles.text}>
        <Text
          style={{ fontSize: "1.5em", fontWeight: "bold", color: "#eb7d34" }}
        >
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
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
    height: "80%",
    width: "80%",
    margin: "auto"
    /*shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,*/
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
