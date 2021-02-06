import { TileType } from "./tile-type";

export class TileContainer {
    public containerID : string;
    public tiles : Map<TileType, Number>;

    constructor(containerID : string) {
        this.containerID = containerID;

        this.tiles = new Map<TileType,Number>();
    }
}
