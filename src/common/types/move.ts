import { TileType } from './tile-type'

export class Move {
    private sourceContainerID : string;
    private destinationPatternLineID : string;
    private tileType : TileType;

    constructor(sourceContainerID : string, 
        destinationPatternLineID : string, 
        tileType: TileType)

    {
        this.sourceContainerID = sourceContainerID;
        this.destinationPatternLineID = destinationPatternLineID;
        this.tileType = tileType;
    }
}
