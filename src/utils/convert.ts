// import mapObject, {mapObjectSkip, Mapper} from 'map-obj';
import { User, UserData } from "../structures/User";

type Configuration = {
    name: string
}

function convert(user: any, config: Configuration): UserData {
    let newUserData: UserData = {
        name: config.name ? user[config.name] : user["name"],
        ...user // Add remaining info
    }
    if (config.name) {
        // Deletes duplicate
        delete newUserData[config.name]
    }
    return newUserData;
}

export { Configuration, convert };