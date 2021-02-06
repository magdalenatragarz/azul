import { TileType } from "./tile-type";

export class WallTile {
    public tileType : TileType;
    public isSet : boolean;
    public isNew ?: boolean;

    constructor(tileType : TileType) {
        this.tileType = tileType;
        this.isSet = false;
    }
}
