type GameID = string;

export class StartGameRequest {
    private gameID : GameID;

    constructor(gameID : GameID) {
        this.gameID = gameID
    }

    public getGameID() : GameID {
        return this.gameID;
    }
}
