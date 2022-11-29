import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const LoaderExampleText = () => (
  <div>
    <Dimmer active>
      <Loader>Cargando...</Loader>
    </Dimmer>
  </div>
);

export default LoaderExampleText;
