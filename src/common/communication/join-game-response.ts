type PlayerID = string;
type GameID = string;

export class JoinGameResponse {
    private playerID : PlayerID;
    private gameID : GameID;

    constructor(playerID : PlayerID, gameID : string) {
        this.playerID = playerID;
        this.gameID = gameID;
    }
}
