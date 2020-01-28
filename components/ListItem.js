import React from "react";
import {TouchableOpacity, Image, View, Text } from "react-native";
import PropTypes from "prop-types";

const mediaUrl = "http://media.mw.metropolia.fi/wbma/uploads/";

const ListItem = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.push("Single", { file: props.singleMedia });
      }
    }
    >
      <Image
        source={{ uri: mediaUrl + props.singleMedia.thumbnails.w160 }}
      />
      <View>
        <Text>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object
};

export default ListItem;
