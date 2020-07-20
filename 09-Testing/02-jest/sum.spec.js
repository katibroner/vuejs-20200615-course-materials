const { sum } = require("./sum");

describe("sum", () => {
  let x = 0;

  beforeEach(() => {
    x++;
  });

  afterEach(() => {
    x = 0;
  });

  it("should calc 2 + 2 to 4", () => {
    console.log(x);
    expect(sum(2, 2)).toBe(4);
  });

  it("should calc -1 + 1 = 0", () => {
    expect(sum(-1, 1)).toBe(0);
  });

  it("should calc 1 + -1 = 0", async () => {
    function sum2(a, b) {
      return Promise.resolve(sum(a, b));
    }

    expect(await sum2(1, -1)).toBe(0);
  });
});
