'use strict';

import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import App from './app'

const renderApp = (NextApp) => {
    render(
        <AppContainer>
            <NextApp />
        </AppContainer>,
        document.querySelector('[data-js="app"]')
    )
}

render(
        <App />,
    document.querySelector("[data-js=app]")
);

if (module.hot) {
    module.hot.accept('./app.js', () => {
        const NextApp = require('./app').default
        renderApp(NextApp)
    })
}


