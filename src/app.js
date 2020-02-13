'use Strict'

import React, { Component } from 'react';
import Search from './components/search';
import UserInfo from './components/user-info';
import Actions from './components/actions';
import Repos from './components/repos';
import AppContent from './components/app-content';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: {
        username: 'Julio',
        repos: 12
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]
    }
  }

  render() {
    return <AppContent
      userInfo={this.state.userInfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}
export default App
