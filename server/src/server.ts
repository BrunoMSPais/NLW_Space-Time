import 'dotenv/config'

import fastify from 'fastify'
import jwt from '@fastify/jwt'
import cors from '@fastify/cors'
import multipart from '@fastify/multipart'

import { resolve } from 'node:path'

import { authRoutes } from './routes/auth'
import { uploadRoutes } from './routes/upload'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(multipart)

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: '5rAQ87n3FNi6FVkVF7VDTuCTFFxNvZZb',
})

app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server is running on http://localhost:3333')
  })
