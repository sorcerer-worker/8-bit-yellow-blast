import { Battle } from "./index";

const mockUser = {
    "name": "Test User"
}
let bat: Battle;

describe('battle system', () => {
    beforeAll(() => {
        bat = new Battle(mockUser, mockUser);
    })
    it('makes a battle', () => {
        expect(bat).toBeInstanceOf(Battle);
    })
    it('has a user attack', () => {
        expect(bat.attack(bat.user1.name, "Punch")).toBe("Test User attacked with Punch");
    })
})