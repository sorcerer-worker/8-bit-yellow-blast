import { Move } from "../structures/Move";



/**
 * Manages all direct actions between players.
 */
export class ActionManager {
    
    public moves: object;

    /**
	 * Turns moves into data for the `ActionManager`.
     * @param {object} moves Contains the moves used by the `ActionManager`
	 */
    constructor(moves: object) {
        this.moves = moves;
    }
    
}