import { UserData } from "../structures/User";

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
        user.name = user[config.name]
        delete user[config.name]
        let formatted: UserData = user;
        return formatted;
    }
}

export { Configuration, ConfigManager };