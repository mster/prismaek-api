'use strict'

const {
    handleHarmoniesList
} = require('../handlers/harmonies')

module.exports = async function harmoniesService(fastify, options) {
    fastify.setNotFoundHandler(function notFoundHandler (req, reply) {
        reply
        .code(404)
        .type("application/json")
        .send({ message: "Requested resource not found."});
    })

    fastify.get(
        '/',
        {},
        handleHarmoniesList
    )
}

module.exports.autoPrefix = '/harmonies'