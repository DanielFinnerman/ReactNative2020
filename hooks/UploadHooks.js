import {useState, useContext} from 'react';
import {AsyncStorage} from 'react-native';
import {MediaContext} from '../contexts/MediaContext';
import {fetchGET} from './APIHooks';

const useUploadForm = () => {
  const [media, setMedia] = useContext(MediaContext);
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const handleTitleChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        title: text,
      }));
  };

  const handleDescriptionChange = (text) => {
    setInputs((inputs) =>
      ({
        ...inputs,
        description: text,
      }));
  };

  const handleUpload = async (file) => {
    try {

    const filename = file.uri.split('/').pop();
    const match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    if (type === 'image/jpg') {
      type = 'image/jpeg';
    }

    const fd = new FormData();
    fd.append('title', inputs.title);
    fd.append('description', inputs.description);
    fd.append('file', {uri: file.uri, name: filename, type});

    const token = await AsyncStorage.getItem('userToken');

    const fetchOptions = {
      method: 'POST',
      headers: {
        'x-access-token': token,
      },
      body: fd,
    };


      const result = await fetch('http://media.mw.metropolia.fi/wbma/media', fetchOptions);
      const json = await result.json();
      console.log('upload result:', json);
      if(json.file_id) {
        const json = await fetchGET('media/all');
        const result = await Promise.all(json.files.map(async (item) => {
          return await fetchGET('media', item.file_id);
        }));
        setMedia(result);
        navigation.push('Home');
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return {
    handleTitleChange,
    handleDescriptionChange,
    inputs,
    errors,
    setErrors,
    handleUpload
  };
};
export default useUploadForm;
