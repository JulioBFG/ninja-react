'use strict '

import React from 'react';
import propTypes from 'prop-types'

const Search = ({ isDisabled, handleSearch }) => (
    <div className='search'>
        <input
            type='search'
            placeholder='digite o nome do usuario no GitHub'
            disabled = {isDisabled}
            onKeyUp={handleSearch}
        />
    </div>
)

Search.propTypes = {
    handleSearch: propTypes.func.isRequired,
    isDisabled : propTypes.bool.isRequired
}

export default Search