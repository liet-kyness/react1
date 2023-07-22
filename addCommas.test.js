const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

describe("#addCommas", () => {
  test("adds commas to number", () => {
    expect(addCommas(1234)).toBe("1,234");
  });
});

describe("#addCommas", () => {
  test("add commas to a number with floating point decimal", () => {
    expect(addCommas(12345.678)).toBe("12,345.678");
  });
});

describe("#addCommas", () => {
  test("add commas to larger numbers", () => {
    expect(addCommas(1234567890)).toBe("1,234,567,890");
  });
});
