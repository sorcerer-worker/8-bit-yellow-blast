import { User, UserData } from "../structures/User";

class Stats {

    user1: User;
    user2: User;

    constructor(user1: UserData, user2: UserData) {
        this.user1 = new User(user1);
        this.user2 = new User(user2);
    }
}

class BattleManager extends Stats {

    attack(user: string, name: string): string {
        return `${user} attacked with ${name}`
    }  
}

export { BattleManager };