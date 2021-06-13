import { GameState } from "../common/types/game-state";
import { Move } from "../common/types/move";
import { TileType } from "../common/types/tile-type";
import { AzulPlayer } from "../server/azul-player";

type PlayerID = string;
type GameID = string;
type RoomID = string;

export class AzulGame {
    private gameID : GameID;
    private roomID : RoomID;

    private idOfFirstPlayerInNextRound ?: PlayerID;
    private idOfCurrentlyPlaying ?: PlayerID;
    private isEndOfRound ?: boolean;
    private isCurrentRoundTheLast ?: boolean;
    private playingQueue : Array<PlayerID>;
    private usedTiles : Map<TileType, Number>;
    private notUsedTiles : Map<TileType, Number>;
    private players : Map<PlayerID, AzulPlayer>;
    

    constructor(gameID : string, roomID : RoomID) {
        this.gameID = gameID;
        this.roomID = roomID;

        this.playingQueue = new Array<PlayerID>();
        this.usedTiles = new Map<TileType, Number>();
        this.notUsedTiles = new Map<TileType, Number>();
        this.players = new Map<PlayerID, AzulPlayer>();

        this.fillNotUsedTiles();
    }

    public addPlayer(player : AzulPlayer) {
        this.players.set(player.getPlayerID(), player); 
    }

    public start() {

    }

    public applyMove(playerID : PlayerID, move : Move) {

    }

    public getGameState() : GameState {
        return new GameState("", "", false);
    }

    public getGameID() : GameID {
        return this.gameID;
    }

    public getRoomID() : RoomID {
        return this.roomID;
    }
    
    private fillNotUsedTiles() {
        const initialTilesCount = 20;

        this.notUsedTiles.set(TileType.patternedBlack, initialTilesCount);
        this.notUsedTiles.set(TileType.patternedBlue, initialTilesCount);
        this.notUsedTiles.set(TileType.patternedYellow, initialTilesCount);
        this.notUsedTiles.set(TileType.plainBlue, initialTilesCount);
        this.notUsedTiles.set(TileType.plainRed, initialTilesCount);
    }
    
    private fillTileContainers() {

    }

    private countPoints() {

    }

    private adjustTileContainersCount() {

    }

    private areContainersEmpty() : boolean {
        return false;
    }
} 
