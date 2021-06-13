import { TileType } from './tile-type'

type ContainerID = string;
type PatternLineID = string;

export class Move {
    private sourceContainerID : ContainerID;
    private destinationPatternLineID : PatternLineID;
    private tileType : TileType;

    constructor(sourceContainerID : ContainerID, 
        destinationPatternLineID : PatternLineID, 
        tileType: TileType)

    {
        this.sourceContainerID = sourceContainerID;
        this.destinationPatternLineID = destinationPatternLineID;
        this.tileType = tileType;
    }
}
