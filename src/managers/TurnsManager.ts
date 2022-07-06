import { User, UserData } from "../structures/User";

class TurnsManager {

    turnTable: Map<number, string>;
    currentTurn: number;

    constructor() {
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
        this.turnTable.set(count, user.name)
        return count;
    }
}

export { TurnsManager }