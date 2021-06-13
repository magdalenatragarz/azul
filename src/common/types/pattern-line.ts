import { TileType } from "./tile-type";

type PatternLineID = string;

export class PatternLine {
    public patternLineID : PatternLineID;
    public size : Number;
    public setTilesCount : Number;
    public tileType ?: TileType;

    constructor(patternLineID : PatternLineID, size : Number) {
        this.patternLineID = patternLineID;
        this.size = size;

        this.setTilesCount = 0;
        this.tileType = undefined;
    }
}
