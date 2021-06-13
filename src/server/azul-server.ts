import { CreateGameRequest } from "../common/communication/create-game-request";
import { CreateGameResponse } from "../common/communication/create-game-response";
import { JoinGameRequest } from "../common/communication/join-game-request";
import { JoinGameResponse } from "../common/communication/join-game-response";
import { GetGameStateRequest } from "../common/communication/get-game-state-request";
import { GetGameStateResponse } from "../common/communication/get-game-state-response";
import { GameState } from "../common/types/game-state";
import { StartGameRequest } from "../common/communication/start-game-request";
import { StartGameResponse } from "../common/communication/start-game-response";
import { MakeMoveRequest } from "../common/communication/make-move-request";
import { MakeMoveResponse } from "../common/communication/make-move-response";

import { AzulGame } from "./azul-game";
import { v4 as getUUID } from "uuid"
import { AzulPlayer } from "./azul-player";

type GameID = string;
type RoomID = string;

export class AzulServer {
    private gamesByGameID : Map<GameID, AzulGame>;
    private gamesByRoomID : Map<RoomID, AzulGame>;

    constructor() {
        this.gamesByGameID = new Map<GameID, AzulGame>();
        this.gamesByRoomID = new Map<RoomID, AzulGame>();
    }

    public onCreateGame(req : CreateGameRequest) : CreateGameResponse {
        let gameID = getUUID();
        let roomID = getUUID(); 
        let newGame = new AzulGame(gameID, roomID);

        this.gamesByGameID.set(gameID, newGame);
        this.gamesByRoomID.set(roomID, newGame);
        
        return new CreateGameResponse(roomID);
    }

    public onJoinGame(req : JoinGameRequest) : JoinGameResponse {
        let newAzulPlayer = new AzulPlayer(getUUID());
        let azulGame = this.gamesByRoomID.get(req.getRoomCode());

        if (azulGame) {
            azulGame.addPlayer(newAzulPlayer);
            return new JoinGameResponse(newAzulPlayer.getPlayerID(), azulGame.getGameID());
        }
        throw new Error("Game with room code " + req.getRoomCode() + " does not exist");
    }

    public onGetGameState(req : GetGameStateRequest) : GetGameStateResponse {

        let azulGame = this.gamesByGameID.get(req.getGameID());

        if (azulGame) {
            return new GetGameStateResponse(azulGame.getGameState());
        }
        throw new Error("Game with gameID " + req.getGameID() + " does not exist.");
    }

    public onStartGame(req : StartGameRequest) : StartGameResponse {
        let azulGame = this.gamesByGameID.get(req.getGameID());

        if (azulGame) {
            azulGame.start();
            return new StartGameResponse();
        }
        throw new Error("Game with gameID " + req.getGameID() + " does not exist.");
    } 

    public onMakeMove(req : MakeMoveRequest) : MakeMoveResponse {
        let azulGame = this.gamesByGameID.get(req.getGameID());

        if (azulGame) {
            azulGame.applyMove(req.getPlayerID(), req.getMove());
            return new MakeMoveResponse();
        }
        throw new Error("Game with gameID " + req.getGameID() + " does not exist.");
    }
}
