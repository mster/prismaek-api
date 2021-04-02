'use strict'

const build = require('./build')

const port = process.env.PORT || 3371
const app = build(
    { logger: process.env?.NODE_ENV === 'production' ? false : true }
)

const start = async () => {
    try {
        await app.listen(port)
        app.log.info(`Server listening on port: ${port}`)
    } catch (error) {
        app.log.error(error)
        process.exit(-1)
    }
}

start()