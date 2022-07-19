import { User, UserData } from "../structures/User";
import { TurnsManager } from "./TurnsManager"

/**
 * Base class for `BattleManager` it keeps track of Stat information.
 */
class Stats {

    user1: User;
    user2: User;
    /**
     * Uses two copies of `UserData` object to contain the stat-related data for the two.
     * @param {UserData} user1  The first `User`
     * @param {UserData} user2  The second `User`
     */
    constructor(user1: UserData, user2: UserData) {
        this.user1 = new User(user1);
        this.user2 = new User(user2);
    }
}

/**
 * Manages battles and imports many thing required for such.
 */
class BattleManager extends Stats {

    turns: TurnsManager;

    /**
     * Uses two copies of `UserData` object to generate a battle between the two.
     * @param {UserData} user1  The first `User`
     * @param {UserData} user2  The second `User`
     */
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