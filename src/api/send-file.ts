import express from 'express'
import { Response, Request } from 'express'
import { JoinGameRequest } from '../common/communication/join-game-request'

const api = express.Router()

const handler = (req : Request, res : Response) => {
    res.json(new JoinGameRequest("Madzia"));
}

api.get('/api/send', handler)


module.exports = api