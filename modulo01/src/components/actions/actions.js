"use strict ";

import React from "react";
import PropTypes from "prop-types";
import actions from '../actions'

const Actions = ({ getRepos, getStarred }) => (
  <div className="actions">
    <button onClick={getRepos}>Ver Repositórios</button>
    <button onClick={getStarred}>Ver favoritos</button>
  </div>
);

Actions.PropTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
};

export default Actions;
