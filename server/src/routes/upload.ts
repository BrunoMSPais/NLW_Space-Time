import { FastifyInstance } from 'fastify'

import { promisify } from 'node:util'
import { pipeline } from 'node:stream'
import { randomUUID } from 'node:crypto'
import { createWriteStream } from 'node:fs'
import { extname, resolve } from 'node:path'

const pump = promisify(pipeline)

export async function uploadRoutes(app: FastifyInstance) {
  app.post('/upload', async (request, reply) => {
    const upload = await request.file({
      limits: {
        fileSize: 1024 * 1024 * 5, // 5MB
      },
    })

    if (!upload) return reply.status(400).send()

    const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/
    const isValidFileFormat = mimeTypeRegex.test(upload.mimetype)

    if (!isValidFileFormat) return reply.status(400).send()

    const fileId = randomUUID()
    const fileExtension = extname(upload.filename)
    const fileName = fileId.concat(fileExtension)

    const writeStream = createWriteStream(
      resolve(__dirname, '../../uploads', fileName)
    )

    await pump(upload.file, writeStream)

    const fullUrl = request.protocol.concat('://').concat(request.hostname)
    const fileUrl = new URL(`/uploads/${fileName}`, fullUrl).toString()

    return { fileUrl }
  })
}
