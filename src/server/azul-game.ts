import { TileType } from "../common/types/tile-type";

import { AzulPlayer } from "./azul-player";

export class AzulGame {
    private gameID : string;
    private roomCode : Number;

    private idOfFirstPlayerInNextRound ?: string;
    private idOfCurrentlyPlaying ?: string;
    private isEndOfRound ?: boolean;
    private isCurrentRoundTheLast ?: boolean;
    private playingQueue : Array<string>;
    private usedTiles : Map<TileType, Number>;
    private notUsedTiles : Map<TileType, Number>;
    private players : Map<string, AzulPlayer>;
    

    constructor(gameID : string, roomCode : Number) {
        this.gameID = gameID;
        this.roomCode = roomCode;

        this.playingQueue = new Array<string>();
        this.usedTiles = new Map<TileType, Number>();
        this.notUsedTiles = new Map<TileType, Number>();
        this.players = new Map<string, AzulPlayer>();

        this.fillNotUsedTiles();
    }

    private fillNotUsedTiles() {
        this.notUsedTiles.set(TileType.patternedBlack, 20);
        this.notUsedTiles.set(TileType.patternedBlue, 20);
        this.notUsedTiles.set(TileType.patternedYellow, 20);
        this.notUsedTiles.set(TileType.plainBlue, 20);
        this.notUsedTiles.set(TileType.plainRed, 20);
    }       
} 
