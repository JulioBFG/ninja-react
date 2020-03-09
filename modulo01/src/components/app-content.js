'use strict'

import PropType from 'prop-types';
import React from 'react';
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

const AppContent = ({ 
  userInfo, 
  repos, 
  starred,
  isFetching,
  handleSearch, 
  getRepos, 
  getStarred }) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userInfo && <UserInfo userInfo={userInfo} />}
    {!!userInfo && <Actions  getRepos ={getRepos} getStarred={getStarred} />}


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
  starred : PropType.array.isRequired,
  isFetching : PropType.bool.isRequired,
  handleSearch : PropType.func.isRequired,
  getRepos : PropType.func.isRequired,
  getStarred : PropType.func.isRequired
}

export default AppContent