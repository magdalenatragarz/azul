import { Move } from "../types/move";

export class MakeMoveRequest {
    private playerID : string;
    private gameID : string;
    private move : Move;

    constructor(playerID : string, gameID : string, move : Move) {
        this.playerID = playerID;
        this.gameID = gameID;
        this.move = move;
    }
}
