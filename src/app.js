'use Strict'

import React from 'react';

const App = () => {
  <div className='app'>
    <div>
      <input className='search' placeholder='digite o nome do usuario' />
    </div>
    <div className='user-info'>
      <img src='https://avatars3.githubusercontent.com/u/36900887?v=4' />
      <h2>
        <a href='https://api.github.com/users/JulioBFG'> Julio Cesar Lopes</a>
      </h2>

      <ul className='repos-info'>
        <li> Repositórios :122</li>
        <li> Seguidores: 9</li>
        <li> Seguindo : 122312</li>
      </ul>
    </div>
    <div className='actions'>
      <button>Ver Repositórios</button>
      <button>Ver favoritos</button>
    </div>

    <div className='repos'>
      <h2> Repositórios</h2>
      <ul>
        <li><a href='#'>Nome do repositório</a></li>
      </ul>
    </div>

    <div className='starred'>
      <ul>
        <h2>favoritos</h2>
        <li><a href='#'>Nome do repositório</a></li>
      </ul>
    </div>
  </div>
}
export default App
