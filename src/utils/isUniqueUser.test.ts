import { isUniqueUser } from "./isUniqueUser";
import { UserData, User } from "../structures/User";

// json files
import mockUser from "../__mock__/mockUser.json"
import mockAltUser from "../__mock__/mockAltUser.json"

let currentUser: User;

describe("unique user utility tool", () => {
    beforeAll(() => {
        currentUser = new User(mockAltUser);
        // Likely will be changed into currentUsers after becoming an array
    })
    it("can check if a user is unique", () => {
        expect(isUniqueUser(mockUser.discordId, currentUser)).toBeTruthy();
    })
})