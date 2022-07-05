import { UserData } from "../structures/User";
import { convert } from "../utils/convert";

type Configuration = {
    name: string
}

class ConfigManager {

    config: Configuration;
    user1: UserData;
    user2: UserData;

    constructor(config: Configuration, user1: any, user2: any) {
        this.config = config;
        this.user1 = ConfigManager.reformatUser(config, user1);
        this.user2 = ConfigManager.reformatUser(config, user2);

    }
    static reformatUser(config: Configuration, user: any): UserData {
        let formatted: UserData = convert(user, config);
        return formatted;
    }
}

export { Configuration, ConfigManager };