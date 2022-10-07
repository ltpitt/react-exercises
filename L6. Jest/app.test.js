const { expect } = require("@jest/globals");

var filterArray = require("./app");

// Verify that if null is passed to this function, the function returns null. Use the toBeNull() matcher for this.
// Verify that if [1, 2, 3, 4] is passed, an array with a length of 4 is returned and each of the values match. Use the toEqual() matcher for this.
// Verify that if [50, 75, 100, 125] is passed, the array will not contain 125. Combine the not method and the toContain() matcher for this.

describe("filterArray", () => {
  it("will return null if null is passed", () => {
    var results = filterArray(null);
    expect(results).toBeNull();
  });

  it("will return any number lower than 100", () => {
    var mockArray = [1, 2, 3, 4];
    var results = filterArray(mockArray);
    expect(results.length).toEqual(mockArray.length);
    expect(results[0]).toEqual(mockArray[0]);
    expect(results[1]).toEqual(mockArray[1]);
    expect(results[2]).toEqual(mockArray[2]);
    expect(results[3]).toEqual(mockArray[3]);
  });

  it("will never return a number bigger than 100", () => {
    var mockArray = [50, 75, 100, 125];
    var results = filterArray(mockArray);
    expect(results).not.toContain(125);
  });
});
