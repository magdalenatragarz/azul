import { PlayerState } from "../common/types/player-state";
import { Move } from "../common/types/move";
import { v4 as getUUID } from "uuid";

type PlayerID = string;

export class AzulPlayer {
    private playerID : PlayerID;
    private state : PlayerState;

    constructor(playerID : PlayerID) {
        this.playerID = playerID;
        
        this.state = new PlayerState(getUUID());
    }

    public makeMove(move : Move) {

    }
    
    public getPlayerID() {
        return this.playerID;
    }

    public getPlayerState() {
        return this.state;
    }

}
