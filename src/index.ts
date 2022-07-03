import { BattleManager } from "./managers/BattleManager";
import { User, UserData } from "./structures/User";

class Battle extends BattleManager {
    constructor(user1: UserData, user2: UserData) {
        super(user1, user2);

    }
}

export { Battle, BattleManager };