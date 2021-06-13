import { PlayerState } from './player-state'
import { TileContainer } from './tile-container';
import { v4 as getUUID } from 'uuid';

type PlayerID = string;
type GameID = string;

export class GameState {
    public gameID : GameID;
    public idOfCurrentlyPlaying : PlayerID;
    public playingQueue : Array<PlayerID>; 
    public isGameFinished : boolean;
    public players : Array<PlayerState>;
    public factories : Array<TileContainer>;
    public center : TileContainer;

    constructor(gameID : GameID, idOfCurrentlyPlaying : PlayerID, isGameFinished : boolean) {
        this.gameID = gameID;
        this.idOfCurrentlyPlaying = idOfCurrentlyPlaying;
        this.isGameFinished = isGameFinished;

        this.playingQueue = new Array<PlayerID>();
        this.players = new Array<PlayerState>();
        this.factories = new Array<TileContainer>();
        this.center = new TileContainer(getUUID());
    }
}
