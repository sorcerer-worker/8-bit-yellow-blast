import { Battle } from "./index";

// json files
import mockUser from "./__mock__/mockUser.json"
import mockConfig from "./__mock__/mockConfig.json"

let bat: Battle;

describe('battle system', () => {
    beforeAll(() => {
        bat = new Battle(mockUser, mockUser, mockConfig);
    })
    it('makes a battle', () => {
        expect(bat).toBeInstanceOf(Battle);
    })
    it('has a user attack', () => {
        expect(bat.attack(bat.user1.name, "Punch")).toBe("Test User attacked with Punch");
    })
    it('has turn system integrated into the battle system', () => {
        expect(bat.turns.users).toMatchSnapshot();
    })
})