import React from 'react';
import {MediaProvider} from './contexts/MediaContext';

const App = () => {
  return (
    <MediaProvider>
      <Navigator></Navigator>
    </MediaProvider>
  );
};

export default App;
