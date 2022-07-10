import { BattleManager } from "./managers/BattleManager";
import { ConfigManager, Configuration } from "./managers/ConfigManager"
import { User, UserData } from "./structures/User";
import utils from "./utils"

function isUserData(user: UserData | any): user is UserData {
    return user.name !== undefined;
}

// function isUser(user: User | any): User{
//     if (user instanceof User) {
//         return User(user.data)
//     } 
// }

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
        if (!utils.isUniqueUser(usr1.id, new User(usr2))) {
            // prevents two users having the same id
            throw new Error("Invalid a unique id is matching between users");
        }
    }

    getUserById(id: number) {
        let userInstance: User | Object = {};
        [this.user1, this.user2]
            .every(user => {
                if (user.data.id == id) {
                    userInstance = user;
                }
            })
        if (userInstance instanceof User) {
            const ref = this.turns.turnTableRef.get(id); // [name, count] typeof object
            if (ref instanceof Object) {
              userInstance.data.isTurn = this.turns.currentTurn == ref[1]
            }
            else {
                userInstance.data.isTurn = null;
            }
        }
        return userInstance;
    }
}

export { Battle, BattleManager, utils };