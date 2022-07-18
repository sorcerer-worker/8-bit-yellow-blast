/**
 * Represents each `Move` used by `User` objs.
 */
export class Move {

    public name: string;
    public rating: number;
    public type: string;
    
    /**
     * Turns compatible data into `Move`
     * @param {string} name Name of the move
     * @param {number} rating Rating of move its strength
     * @param {string} type Type of move it is
     */
    constructor(name: string, rating: number, type: string) {
        this.name = name;
        this.rating = rating;
        this.type = type;
    }
}