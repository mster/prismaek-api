'use strict'

const { isHex, hex2HSV, HSV2Hex } = require('../../prismaek/lib/utils')
const harmonies = require('../../prismaek/lib/harmonies')

module.exports = {
    handleSchemeRoot,
    handleSchemeBuilder
}

const formatMap = {
    'hex': HSV2Hex
}

async function handleSchemeRoot (req, reply) {
    reply
    .header('Access-Control-Allow-Origin', '*')
    .send({ message: 'Let\'s Build a Scheme!'})
}

async function handleSchemeBuilder (req, reply) {
    let { base, type, format } = req.query

    if (!isHex(base)) {
        reply
        .header('Access-Control-Allow-Origin', '*')
        .code(400)
        .send(`Invalid hex color code: ${base}`)
    }

    if (harmonies[type] == null) {
        reply
        .header('Access-Control-Allow-Origin', '*')
        .code(400)
        .send(`Invalid color harmony type: ${type}`)
    }

    if (!format) format = 'hex'

    const baseHSV = hex2HSV(base)
    const HSVScheme = harmonies[type](baseHSV)
    const scheme = HSVScheme.map(e => formatMap[format](e))
    
    reply
    .header('Access-Control-Allow-Origin', '*')
    .send({ base, baseHSV, type, scheme })
}