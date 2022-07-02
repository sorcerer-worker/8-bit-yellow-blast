import { BattleManager } from "./managers/BattleManager";
import { User, UserData } from "./structures/User";

function Battle(userData: UserData): BattleManager{
    const newUser = new User({name: 'Juice'});
    return new BattleManager(newUser, newUser);
}

export { Battle, BattleManager };