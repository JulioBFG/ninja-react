'use strict '

import React from 'react';

const UserInfo = () => (
    <div className='user-info'>
        <img src='https://avatars3.githubusercontent.com/u/36900887?v=4' />

        <h1 className='username'>
            <a href='https://api.github.com/users/JulioBFG'> Julio Cesar Lopes</a>
        </h1>

        <ul className='repos-info'>
            <li> Repositórios :122</li>
            <li> Seguidores: 9</li>
            <li> Seguindo : 122312</li>
        </ul>
    </div>
)

export default UserInfo

