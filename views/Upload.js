
import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import {Form, Button, Text, Content} from 'native-base';
import FormTextInput from '../components/FormTextInput';
import PropTypes from 'prop-types';
import useUploadForm from '../hooks/UploadHooks';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

const Upload = (props) => {
  const [image, setImage] = useState(image = null);

  const {
    inputs,
    handleTitleChange,
    handleDescriptionChange,
    handleUpload,
  } = useUploadForm();

   const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      setFile(result);
    }
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);

  return (
      <Content>
        <Form>
          <Item>
            <FormTextInput
              placeholder='Title'
              onChangeText={handleTitleChange}
              value={inputs.title}
            />
          </Item>
          <Item>
            <FormTextInput
              placeholder='Description'
              onChangeText={handleDescriptionChange}
              value={inputs.description}
            />
          </Item>
          {image &&
          <Image source={{ uri: image.uri }} style={{ width: '100%', height: deviceHeight / 3 }} />}
          <Button full onPress={pickImage}>
            <Text>Select file</Text>
          </Button>
          <Button dark full>
          <Text>Reset form</Text>
        </Button>
          <Button full onPress={() => {
            handleUpload(image);
          }}>
            <Text>Upload</Text>
          </Button>
        </Form>
      </Content>
  );
}

// proptypes here
Upload.propTypes = {
  navigation: PropTypes.object,
};

export default Upload;
