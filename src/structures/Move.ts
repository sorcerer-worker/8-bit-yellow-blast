export enum MoveType {
    Heals,
    Damages,
    Restores // Possibly will be removed as mentioned in ActionManager
} 

/**
 * Represents each `Move` used by `User` objects.
 */
export class Move {

    public name: string;
    public rating: number;
    public type: MoveType;
    
    /**
     * Turns compatible data into `Move`
     * @param {string} name Name of the move
     * @param {number} rating Rating of move its strength
     * @param {MoveType} type Type of move it is
     */
    constructor(name: string, rating: number, type: MoveType) {
        this.name = name;
        this.rating = rating;
        this.type = type;
    }
}