import { User } from "../structures/User";

class Stats {

    user1: User;
    user2: User;

    constructor(user1: User, user2: User) {
        this.user1 = user1;
        this.user2 = user2;
    }
}

class BattleManager extends Stats {
    attack(user: string, name: string): string {
        return `${user} attacked with ${name}`
    }
}

export { BattleManager };