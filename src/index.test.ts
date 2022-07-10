import { Battle } from "./index";

// json files
import mockUser from "./__mock__/mockUser.json"
import mockAltUser from "./__mock__/mockAltUser.json"
import mockConfig from "./__mock__/mockConfig.json"

let bat: Battle;

describe('battle system', () => {
    beforeAll(() => {
        bat = new Battle(mockUser, mockAltUser, mockConfig);
    })
    it('makes a battle', () => {
        expect(bat).toBeInstanceOf(Battle);
    })
    it('has a user attack', () => {
        expect(bat.attack(bat.user1.name, "Punch")).toBe("Test User attacked with Punch");
    })
    it('has integrated turn system', () => {
        expect(bat.turns.users).toMatchSnapshot();
    })
    it('can use getUserById', () => {
        const userInstance = (bat.getUserById(bat.user1.data.id))
        expect(userInstance).toMatchSnapshot();
    })
})