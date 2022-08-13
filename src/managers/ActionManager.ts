import { MoveType, Move } from "../structures/Move";
import { User, UserData } from "../structures/User";

export interface MoveData {
    name: string;
    rating: number;
    type: MoveType;
}

type Event = "blast" | "use"

type EventFunc = ( ...args: any ) => void

/**
 * Manages all direct actions between players.
 */
export class ActionManager {
    
    public beforeBlast: EventFunc | undefined
    public beforeUse: EventFunc | undefined
    public afterBlast: EventFunc | undefined
    public afterUse: EventFunc | undefined
    public moves: Move[];
    private targetMove: Move | undefined;
    /**
	 * Turns moves into data for the `ActionManager`.
     * @param {MoveData[]} moves Contains the moves used by the `ActionManager`
	 */
    constructor(moves: MoveData[]) {
        this.moves = this._updateMoves(moves)
        this.beforeBlast = undefined;
        this.beforeUse = undefined;
    }
    /**
	 * Turns `MoveData[]` into `Move[]` objects
     * @param {MoveData[]} moves Contains the moves used by the `ActionManager`
     * @returns {Move[]} Returns generated `Move` array
	 */
    private _updateMoves(moves: MoveData[]): Move[] {
        return moves.map(move => {
            return new Move(move.name, move.rating, move.type)
        })
    }
    /**
     * Allows a `Move` to be specified 
     * @param {number} moveNum The `Move`'s number associated with it in the array
     */
    public use(moveNum: number): this {
        if (this.beforeUse) {
            this.beforeUse()
        }
        this.targetMove = this.moves[moveNum];
        if (this.afterUse) {
            this.afterUse()
        }
        return this;
    }
    /**
     * Allows a `User` to be specified 
     * @param {User} user The `User` meant to be targeted
     */
    public blast(user: User) { // <-- TODO: This could be upgraded to provide better stat manipulation  
        if (this.targetMove) {
            // Run .before("blast") event if exists
            if (this.beforeBlast) {
                this.beforeBlast()
            }
            const {name, rating, type} = this.targetMove
            switch (this.targetMove.type) {
                case MoveType.Heals:
                    user.currentHealth += rating
            
                case MoveType.Damages:
                    user.currentHealth -= rating
        
                case MoveType.Restores:
                    // May be removed in the near future given possible uselessness
                    user.currentHealth = rating
                
                case MoveType.Heals:
                case MoveType.Damages:
                case MoveType.Restores:
                    if (this.afterBlast) {
                        this.afterBlast()
                    }
                    return this;
                default:
                    throw Error("Invalid MoveType")
                    break;
            }
        }
        throw Error("No particular Move previously specified.")
    }
    /**
	 * An event that executes before a specified method is ran it allows data to be manipulated prior to being used
     * @param {Event} event The `Event` meant to be targeted
     * @param {EventFunction} func The `EventFunction` meant to be used when the event is called
	 */
     public before(event: Event, func: EventFunc): this {
        switch (event) {
            case "blast":
                this.beforeBlast = func;
                return this;
            case "use":
                this.beforeUse = func;
                return this;
            default:
                throw Error("Invalid Event")
        }
    }
    /**
	 * An event that executes after a specified method is ran it allows data to be manipulated after it was used
     * @param {Event} event The `Event` meant to be targeted
     * @param {EventFunction} func The `EventFunction` meant to be used when the event is called
	 */
    public after(event: Event, func: EventFunc): this {
        switch (event) {
            case "blast":
                this.afterBlast = func;
                return this;
            case "use":
                this.afterUse = func;
                return this;
            default:
                throw Error("Invalid Event")
        }
    }
}
