
import { MoveData, ActionManager } from "./ActionManager"
import { Move, MoveType } from "../structures/Move";
import { User } from "../structures/User";

import mockAltUser from "../__mock__/mockAltUser.json"

const moves: MoveData[] = [
    {name: "Punch", rating :100, type: MoveType.Damages},
    {name: "Heal", rating :100, type: MoveType.Heals},
]

let manager: ActionManager;

describe("action manager", () => {
    beforeAll(() => {
        manager = new ActionManager(moves);
    })
    it("can make instance", () => {
        expect(manager).toBeInstanceOf(ActionManager)
    })
    it("can change setting", () => {
        const userInstance = new User(mockAltUser);
        userInstance
            .prevent
            .overload
            .hp = false;
        expect(userInstance.prevent.overload.hp).toBeFalsy()
    })
    it("can use a particular Move on a User", () => {
        const userInstance = new User(mockAltUser);
        manager
            .use(1)
            .blast(userInstance)
    })
    it("can make events", () => {
        const userInstance = new User(mockAltUser);
        let beforeWorks = false;
        let useWorks = false;
        manager // now with chained methods
            .before("blast", () => {
                beforeWorks = true;
            })
            .after("use", () => {
                useWorks = true
            })
            .use(1)
            .blast(userInstance)
        expect(beforeWorks).toBeTruthy()
        expect(useWorks).toBeTruthy()
    })
})