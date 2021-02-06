import { BottomLine } from "./bottom-line";
import { PatternLines } from "./pattern-lines";
import { Wall } from "./wall";

export class PlayerState {
    public playerID : string;
    public points : Number;
    public patternLines : PatternLines;
    public bottomLine : BottomLine;
    public wall : Wall;

    constructor(playerID : string) {
        this.playerID = playerID;

        this.points = 0;
        this.patternLines = new PatternLines();
        this.bottomLine = new BottomLine();
        this.wall = new Wall();
    }
} 
