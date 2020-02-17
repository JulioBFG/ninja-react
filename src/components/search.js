'use strict '

import React from 'react';
import propTypes from 'prop-types'

const Search = ({ handleSearch }) => (
    <div className='search'>
        <input
            type='search'
            placeholder='digite o nome do usuario no GitHub'
            onKeyUp={handleSearch}
        />
    </div>
)

Search.propTypes = {
    handleSearch: propTypes.func.isRequired
}

export default Search