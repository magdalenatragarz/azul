type GameID = string;

export class GetGameStateRequest {
    private gameID : GameID;

    constructor(gameId : GameID) {
        this.gameID = gameId;
    }

    public getGameID() : GameID {
        return this.gameID;
    }
}
