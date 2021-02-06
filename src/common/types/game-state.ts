import { PlayerState } from './player-state'
import { TileContainer } from './tile-container';
import { v4 as getUUID } from 'uuid';

export class GameState {
    public gameID : string;
    public idOfCurrentlyPlaying : string;
    public playingQueue : Array<string>; 
    public isGameFinished : boolean;
    public players : Array<PlayerState>;
    public factories : Array<TileContainer>;
    public center : TileContainer;

    constructor(gameID : string, idOfCurrentlyPlaying : string, isGameFinished : boolean) {
        this.gameID = gameID;
        this.idOfCurrentlyPlaying = idOfCurrentlyPlaying;
        this.isGameFinished = isGameFinished;

        this.playingQueue = new Array<string>();
        this.players = new Array<PlayerState>();
        this.factories = new Array<TileContainer>();
        this.center = new TileContainer(getUUID());
    }
}
