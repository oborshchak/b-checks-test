import { triple } from "./utils";

describe("triple", () => {
  it("case 0", () => {
    const res = triple(0);

    // expect(res).toBe(1); // WRONG
    expect(res).toBe(0);
  });

  it("case 1", () => {
    const res = triple(1);

    expect(res).toBe(3);
  });

  it("case 3", () => {
    const res = triple(3);

    expect(res).toBe(9);
  });

  it("case 9", () => {
    const res = triple(9);

    expect(res).toBe(26);
  });
});
