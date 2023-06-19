import { convertTimestamp } from "@/utils/helpers";

describe("convertTimeStamp", () => {
    test("check correct value", () => {
        expect(convertTimestamp(6000)).toBe("00:06:000");
    });

    test("check 0 value", () => {
        expect(convertTimestamp(0)).toBe("00:00:000");
    });
});