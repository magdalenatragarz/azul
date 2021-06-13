import { Move } from "../types/move";

type PlayerID = string;
type GameID = string;

export class MakeMoveRequest {
    private playerID : PlayerID;
    private gameID : string;
    private move : Move;

    constructor(playerID : PlayerID, gameID : GameID, move : Move) {
        this.playerID = playerID;
        this.gameID = gameID;
        this.move = move;
    }

    public getGameID() : GameID {
        return this.gameID;
    }

    public getPlayerID() : PlayerID {
        return this.playerID;
    }

    public getMove() : Move {
        return this.move;
    }
}
