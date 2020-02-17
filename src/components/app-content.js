'use strict'

import PropType from 'prop-types';
import React from 'react';
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

const AppContent = ({ userInfo, repos, starred, handleSearch }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions />}

    {!!repos.length &&
      <Repos
        className='repos'
        title='repositorios'
        repos={repos} />
    }
    {!!starred.length &&
      <Repos
        className='starred'
        title='Favoritos'
        repos={starred}
      />
    }
  </div>

)

AppContent.propType = {
  userInfo : PropType.object,
  repos : PropType.array.isRequired,
  starred : PropType.array.isRequired
}

export default AppContent