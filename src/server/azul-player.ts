import { PlayerState } from "../common/types/player-state";
import { v4 as getUUID } from "uuid";

export class AzulPlayer {
    private playerID : string;
    private state : PlayerState;

    constructor(playerID : string) {
        this.playerID = playerID;
        
        this.state = new PlayerState(getUUID());
    }
}
