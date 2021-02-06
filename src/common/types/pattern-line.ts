import { TileType } from "./tile-type";

export class PatternLine {
    public patternLineID : string;
    public size : Number;
    public setTilesCount : Number;
    public tileType ?: TileType;

    constructor(patternLineID : string, size : Number) {
        this.patternLineID = patternLineID;
        this.size = size;

        this.setTilesCount = 0;
        this.tileType = undefined;
    }
}
