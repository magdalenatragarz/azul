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

export class AzulServer {
    private gamesByGameID : Map<string, AzulGame>;
    private gamesByRoomCode : Map<Number, AzulGame>;

    constructor() {
        this.gamesByGameID = new Map<string, AzulGame>();
        this.gamesByRoomCode = new Map<Number, AzulGame>();
    }

    public onCreateGame(req : CreateGameRequest) : CreateGameResponse {
        return new CreateGameResponse(Math.random());
    }

    public onJoinGame(req : JoinGameRequest) : JoinGameResponse {
        return new JoinGameResponse(getUUID(), getUUID());
    }

    public onGetGameState(req : GetGameStateRequest) : GetGameStateResponse {
        return new GetGameStateResponse(new GameState(getUUID(), getUUID(), true));
    }

    public onStartGame(req : StartGameRequest) : StartGameResponse {
        return new StartGameResponse();
    } 

    public onMakeMove(req : MakeMoveRequest) : MakeMoveResponse {
        return new MakeMoveResponse();
    }
}
