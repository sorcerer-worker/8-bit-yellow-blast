import { MoveType, Move } from "../structures/Move";
import { User, UserData } from "../structures/User";

export interface MoveData {
    name: string;
    rating: number;
    type: MoveType;
}

export type Event = "blast" | "use"
export type EventFunc = ( ...args: any ) => void
export interface Events {
    /**
     * Events that can be ran before.
     */
    before: {
        blast: EventFunc | undefined,
        use: EventFunc | undefined
    },
    /**
     * Events that can be ran after.
     */
    after: {
        blast: EventFunc | undefined,
        use: EventFunc | undefined
    }
}

/**
 * Manages all direct actions between players.
 */
export class ActionManager {
    
    public events: Events = {
        before: {
            blast: undefined,
            use: undefined
        },
        after: {
            blast: undefined,
            use: undefined
        }
    }
    public moves: Move[];
    private targetMove: Move | undefined;
    /**
	 * Turns moves into data for the `ActionManager`.
     * @param {MoveData[]} moves Contains the moves used by the `ActionManager`
	 */
    constructor(moves: MoveData[]) {
        this.moves = this._updateMoves(moves)
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
        if (this.events.before.use) {
            this.events.before.use()
        }
        this.targetMove = this.moves[moveNum];
        if (this.events.after.use) {
            this.events.after.use()
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
            if (this.events.before.blast) {
                this.events.before.blast()
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
                    if (this.events.after.blast) {
                        this.events.after.blast()
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
     * Allows a `Function` to be specified that executes instead of typical `.blast()` functionality
     * @param {Function} func The `Function` meant to be used instead
     */
    public customBlast(func: (targetMove: Move | undefined) => {}) {  
        try {
            func(this.targetMove) // wrapped
        }
        catch {
            throw Error("customBlast returned a error due to the function passed")
        }
        return this;
    }
    /**
	 * An event that executes before a specified method is ran it allows data to be manipulated prior to being used
     * @param {Event} event The `Event` meant to be targeted
     * @param {EventFunc} func The `EventFunction` meant to be used when the event is called
	 */
     public before(event: Event, func: EventFunc): this {
        switch (event) {
            case "blast":
                this.events.before.blast = func;
                return this;
            case "use":
                this.events.before.use = func;
                return this;
            default:
                throw Error("Invalid Event")
        }
    }
    /**
	 * An event that executes after a specified method is ran it allows data to be manipulated after it was used
     * @param {Event} event The `Event` meant to be targeted
     * @param {EventFunc} func The `EventFunction` meant to be used when the event is called
	 */
    public after(event: Event, func: EventFunc): this {
        switch (event) {
            case "blast":
                this.events.after.blast = func;
                return this;
            case "use":
                this.events.after.use = func;
                return this;
            default:
                throw Error("Invalid Event")
        }
    }
}
