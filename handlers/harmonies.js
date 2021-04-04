'use strict'

module.exports = {
    handleHarmoniesList
}

async function handleHarmoniesList (req, reply) {
    const harmonies = Object.keys(require('prismaek').harmonies)
    
    reply
    .header('Access-Control-Allow-Origin', '*')
    .send(harmonies)
}