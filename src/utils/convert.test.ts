import { convert } from "./convert"


const mockUser = {
    "characterName": "Test User",
    "class": "warrior",
    "pouch": 98638,
    "pvp": false,
    "inventory": {
      "weapons": [],
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

describe("convert utility tool", () => {
    it("runs successful conversion", () => {
        expect(convert(mockUser, mockConfig)).toBeTruthy();
    })
})