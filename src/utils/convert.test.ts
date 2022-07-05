import { UserData } from "../structures/User";
import { convert } from "./convert";

// json files
import mockUser from "../__mock__/mockUser.json"
import mockConfig from "../__mock__/mockConfig.json"

let converted: UserData;

describe("convert utility tool", () => {
    beforeAll(() => {
        converted = convert(mockUser, mockConfig)
    })
    it("runs successful conversion", () => {
        expect(converted).toBeTruthy();
    })
})