import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Loading = ({ inverted, content }) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader data-testid="loading-spinner" content={content} />
    </Dimmer>
  );
};

export default Loading;