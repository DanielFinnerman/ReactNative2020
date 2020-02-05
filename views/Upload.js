import React, {useState} from 'react';
import {
  Content,
  Form,
  Button,
  Text,
  Item,
} from 'native-base';
import {
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import {fetchGET, fetchPOST} from '../hooks/APIHooks';
import FormTextInput from '../components/FormTextInput';


const Upload = (props) => {

  return (
      <Content>
        <Form>
          <Item>
            <FormTextInput
              placeholder='Title'
            />
          </Item>
          <Item>
            <FormTextInput
              placeholder='Description'
            />
          </Item>
          <Button full>
            <Text>Select file</Text>
          </Button>
          <Button dark full>
          <Text>Reset form</Text>
        </Button>
          <Button full>
            <Text>Upload</Text>
          </Button>
        </Form>
      </Content>
  );
};

// proptypes here
Upload.propTypes = {
  navigation: PropTypes.object,
};

export default Upload;
