import { TurnsManager } from "./TurnsManager";
import mockUser from "../__mock__/mockUser.json"
import mockAltUser from "../__mock__/mockAltUser.json"
import { UserData } from "../structures/User";

function newUserData(mock: object): UserData {
    let formatted: UserData = {
        name: mockUser.characterName,
        ...mockUser
    }
    return formatted;
}

let turns: TurnsManager;

describe("turns manager", () => {
    beforeAll(() => {
        turns = new TurnsManager();
    })
    it("adds a new user to the turn manager", () => {
        const position = turns.add(newUserData(mockUser))
        expect(position).toBe(0);
        expect(turns.turnTable.get(position)).toBe("Test User")
    })
    it("adds a additional user", () => {
        expect(turns.add(mockAltUser)).toBe(1);
    })
    it("can show everyone in the turn manager", () => {
        expect(turns.users).toBeTruthy();
    })
})
