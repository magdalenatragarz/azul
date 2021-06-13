import { BottomLine } from "./bottom-line";
import { PatternLines } from "./pattern-lines";
import { Wall } from "./wall";

type PlayerID = string;

export class PlayerState {
    public playerID : PlayerID;
    public points : Number;
    public patternLines : PatternLines;
    public bottomLine : BottomLine;
    public wall : Wall;

    constructor(playerID : PlayerID) {
        this.playerID = playerID;

        this.points = 0;
        this.patternLines = new PatternLines();
        this.bottomLine = new BottomLine();
        this.wall = new Wall();
    }
} 
