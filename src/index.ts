import { BattleManager } from "./managers/BattleManager";
import { ConfigManager, Configuration } from "./managers/ConfigManager"
import { UserData } from "./structures/User";

function isUserData(user: UserData | any): user is UserData {
    return (user as UserData).name !== undefined;
}
class Battle extends BattleManager {

    constructor(user1: UserData | object, user2: UserData| object, config: Configuration | undefined = undefined) {
        let usr1: UserData;
        let usr2: UserData;
        if (config) {
            const newConfig = new ConfigManager(config, user1, user2);
            usr1 = newConfig.user1;
            usr2 = newConfig.user2; 
        }
        else if (isUserData(user1) && isUserData(user2)) {
            usr1 = user1;
            usr2 = user2;
        }
        else {
            throw new Error("Invalid format unable to use the UserData");
        }
        if (!isUserData(user1) || !isUserData(user2)) {
            throw new Error("Invalid format unable to use the UserData");
        }
        super(usr1, usr2);

    }
}

export { Battle, BattleManager };