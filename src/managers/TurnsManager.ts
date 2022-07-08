import { UserData } from "../structures/User";

type UserId = number;

type UserWithPosition = [
    string,
    number
]

class TurnsManager {

    turnTableRef: Map<UserId, UserWithPosition> // Adds additional reference to fixed position
    turnTable: Map<number, string>; // Fixed Positions
    currentTurn: number; // Goes through fixed positions

    constructor() {
        this.turnTableRef = new Map();
        this.turnTable = new Map();
        this.currentTurn = 0;
    }
    get users() {
        return {turns: this.turnTable, currentTurn: this.currentTurn}
    }
    get current() {
        return this.turnTable.get(this.currentTurn);
    }
    add(user: UserData): number{
        const count = this.turnTable.size
        this.turnTableRef.set(user.id, [user.name, count])
        this.turnTable.set(count, user.name)
        return count;
    }
}

export { TurnsManager }