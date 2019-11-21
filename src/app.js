"use strict";

import React from "react";
import Title from "./title";

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Title name="Julio Lopes" lastname="da bicicleta" />
      </div>
    )
  }
})

export default App;
