import express, { json } from 'express'
import { Response, Request } from 'express'
import { CreateGameRequest } from '../common/communication/create-game-request'
import { CreateGameResponse } from '../common/communication/create-game-response'
import { GetGameStateRequest } from '../common/communication/get-game-state-request'
import { JoinGameRequest } from '../common/communication/join-game-request'
import { MakeMoveRequest } from '../common/communication/make-move-request'
import { StartGameRequest } from '../common/communication/start-game-request'
import { AzulServer } from '../server/azul-server'
import { Move } from '../common/types/move'

const api = express.Router()

let azulServer = new AzulServer();

const createGameHandler = (req : Request, res : Response) => {
    try {  
        res.json(azulServer.onCreateGame(new CreateGameRequest()));
    } catch (error) {
        res.status(404).json('{message : ' + error + '}');
    }
}

const joinGameHandler = (req : Request, res : Response) => {
    try {
        res.json(azulServer.onJoinGame(new JoinGameRequest(req.body.roomCode)));
    } catch (error) {
        res.status(404).json('{message : ' + error + '}');
    }
}

const getGameStateHandler = (req : Request, res : Response) => {
    try {
        res.json(azulServer.onGetGameState(new GetGameStateRequest(req.body.gameID)));
    } catch (error) {
        res.status(404).json('{message : ' + error + '}');
    }
}

const startGameHandler = (req : Request, res : Response) => {
    try {
        res.json(azulServer.onStartGame(new StartGameRequest(req.body.gameID)));
    } catch (error) {
        res.status(404).json('{message : ' + error + '}');
    }
}

const makeMoveHandler = (req : Request, res : Response) => {
    try {
        let move = new Move(req.body.move.sourceContainerID, req.body.move.destinationPatternLineID, req.body.move.tileType);
        res.json(azulServer.onMakeMove(new MakeMoveRequest(req.body.playerID, req.body.gameID, move)));
    } catch (error) {
        res.status(404).json('{message : ' + error + '}');
    }
}

api.get('/create', createGameHandler);
api.post('/join', joinGameHandler);
api.post('/state', getGameStateHandler);
api.post('/start', startGameHandler);
api.post('/move', makeMoveHandler);

module.exports = api