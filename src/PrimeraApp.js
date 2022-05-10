import React from 'react'
import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo = 'Hello World', subtitulo = 'First App' }) => {

    return (
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        </>
    )
}

export default PrimeraApp;