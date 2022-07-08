import { User, UserData } from "../structures/User";

type Configuration = {
    name: string,
    id: string
}

function convert(user: any, config: Configuration): UserData {
    let newUserData: UserData = {
        name: config.name ? user[config.name] : user["name"],
        id: config.id ? user[config.id] : user["id"],
        ...user // Add remaining info
    }
    if (config.name) {
        // Deletes duplicate
        delete newUserData[config.name]
    }
    if (config.id) {
        // Deletes duplicate
        delete newUserData[config.id]
    }
    return newUserData;
}

export { Configuration, convert };