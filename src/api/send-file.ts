import express from 'express'
import { Response, Request } from 'express'

const api = express.Router()

const handler = (req : Request, res : Response) => {
    res.send("API HERE!")
}

api.get('/api/send', handler)


module.exports = api