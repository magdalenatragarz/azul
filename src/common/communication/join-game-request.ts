type RoomID = string;

export class JoinGameRequest {
    private roomCode : RoomID;

    constructor(roomCode : RoomID) {
        this.roomCode = roomCode;
    }

    public getRoomCode() : RoomID {
        return this.roomCode;
    }
}
