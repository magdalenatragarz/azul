export class JoinGameResponse {
    private playerID : string;
    private gameID : string;

    constructor(playerID : string, gameID : string) {
        this.playerID = playerID;
        this.gameID = gameID;
    }
}
