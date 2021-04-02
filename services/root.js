'use strict'

module.exports = async function rootService(fastify, options) {
    fastify.setNotFoundHandler(function notFoundHandler (req, reply) {
        reply
        .code(404)
        .type("application/json")
        .send({ message: "Requested resource not found."});
    })

    fastify.get(
        '/',
        {},
        async function (req, reply) {
            reply
            .header('Access-Control-Allow-Origin', '*')
            .send({ message: "GET /" })
    })


}
