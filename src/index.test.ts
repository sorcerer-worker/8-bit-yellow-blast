import { Battle } from "./index";

const mockUser = {
    "characterName": "Test User",
    "class": "thief",
    "pouch": 9982000,
    "pvp": false,
    "inventory": {
      "weapons": [
        3
      ],
      "consumables": [],
      "classSkills": [],
      "otherSkills": []
    },
    "health": {
      "currentHealth": 10,
      "maxHealth": 10
    },
    "level": {
      "currentLevel": 1
    },
    "stats": {
      "strength": 5,
      "defense": 5,
      "speed": 28,
      "vitality": 10,
      "intelligence": 5,
      "magicResistance": 5
    }
  }

const mockConfig = {
    "name": "characterName"
}

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
})