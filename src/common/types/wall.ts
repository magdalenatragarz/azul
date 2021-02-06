import { WallTile } from "./wall-tile";

export class Wall {
    public content : Array<Array<WallTile>>;

    constructor() {
        this.content = new Array<Array<WallTile>>();
    }
}
