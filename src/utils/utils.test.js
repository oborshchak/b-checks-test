import { double, triple } from "./utils";

describe("double", () => {
  it("case 0", () => {
    const res = double(0);

    expect(res).toBe(0);
  });

  it("case 1", () => {
    const res = double(1);

    expect(res).toBe(2);
  });

  it("case 2", () => {
    const res = double(2);

    expect(res).toBe(4);
  });

  it("case 4", () => {
    const res = double(4);

    expect(res).toBe(8);
  });
});

describe("triple", () => {
  it("case 0", () => {
    const res = double(0);

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

    expect(res).toBe(27);
  });
});
