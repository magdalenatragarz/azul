import { GameState } from '../types/game-state'

export class GetGameStateResponse {
    private gameState : GameState;

    constructor(gameState : GameState) {
        this.gameState = gameState;
    }
}
