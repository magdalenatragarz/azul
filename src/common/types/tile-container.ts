import { TileType } from "./tile-type";

type ContainerID = string;

export class TileContainer {
    public containerID : ContainerID;
    public tiles : Map<TileType, Number>;

    constructor(containerID : ContainerID) {
        this.containerID = containerID;

        this.tiles = new Map<TileType,Number>();
    }
}
