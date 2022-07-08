import { User, UserData } from "../structures/User";
import { TurnsManager } from "./TurnsManager"

class Stats {

    user1: User;
    user2: User;

    constructor(user1: UserData, user2: UserData) {
        this.user1 = new User(user1);
        this.user2 = new User(user2);
    }
}

class BattleManager extends Stats {

    turns: TurnsManager;

    constructor(user1: UserData, user2: UserData) {
        super(user1, user2)
        this.turns = new TurnsManager();
        this.turns.add(user1)
        this.turns.add(user2)
    }

    attack(user: string, name: string): string {
        return `${user} attacked with ${name}`
    }  
}

export { BattleManager };