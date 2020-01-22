import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

const mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/';

const Single = (props) => {
  const {navigation} = props;
  console.log('Single', navigation.state);
  const file = navigation.state.params.file;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{file.title}</Text>
      <Image
        style={styles.image}
        source={{uri: mediaURL + file.filename}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  image: {
    width: '80%',
    height: '80%',
    margin: "auto"
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.4em"
  }
});

Single.propTypes = {
  navigation: PropTypes.object,
  file: PropTypes.object,
};

export default Single;
