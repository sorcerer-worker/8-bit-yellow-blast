import { BattleManager } from "./managers/BattleManager";
import { ConfigManager, Configuration } from "./managers/ConfigManager"
import { UserData } from "./structures/User";
import { isUniqueUser } from "./utils/isUniqueUser";
import { convert } from "./utils/convert";

const utils = {
    isUniqueUser,
    convert,
}

function isUserData(user: UserData | any): user is UserData {
    return user.name !== undefined;
}
class Battle extends BattleManager {

    constructor(user1: UserData | object, user2: UserData| object, config: Configuration | undefined = undefined) {
        let usr1: UserData;
        let usr2: UserData;
        if (config) {
            // has a config arg
            const newConfig = new ConfigManager(config, user1, user2);
            usr1 = newConfig.user1;
            usr2 = newConfig.user2; 
        }
        else if (isUserData(user1) && isUserData(user2)) {
            // doesn't have a config arg
            usr1 = user1;
            usr2 = user2;
        }
        else {
            // can't even pass a minor test and isn't even a valid UserData type
            throw new Error("Invalid format unable to use the UserData");
        }
        super(usr1, usr2);

    }
}

export { Battle, BattleManager, utils };