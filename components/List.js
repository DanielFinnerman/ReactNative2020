import { FlatList } from 'react-native';
import ListItem from './ListItem';
import React, {useContext} from 'react';
import { MediaContext } from "../contexts/MediaContext";

const List = () => {
  const [media] = useContext(MediaContext);
  return (
    <FlatList
      data={media}
      renderItem={({item}) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;
