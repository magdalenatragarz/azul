type RoomID = string;

export class CreateGameResponse {
    private roomCode : RoomID;
    

    constructor(roomCode : RoomID) {
        this.roomCode = roomCode
    }
}
