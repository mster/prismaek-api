'use strict'

const { 
    handleSchemeRoot,
    handleSchemeBuilder
} = require('../handlers/scheme')

module.exports = async function schemeService(fastify, options) {
    fastify.setNotFoundHandler(function notFoundHandler (req, reply) {
        reply
        .code(404)
        .type("application/json")
        .send({ message: "Requested resource not found."});
    })

    fastify.get(
        '/',
        {},
        handleSchemeBuilder
    )
}

module.exports.autoPrefix = '/scheme'