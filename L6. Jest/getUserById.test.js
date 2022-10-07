// 1) Test that if an id is passed that is present in the users list, getUserById() will successfully return the user object.
//    Make sure to validate that the user's id, firstName and lastName are all present in the user object and match what you
//    expect from the id you passed.

// 2) Test that if an invalid id which is not present in the users list is passed, getUserById() will reject with an error.
//    Make sure to validate that the text of the error returned.

var getUserById = require("./getUserById");

describe("getUserById", () => {
  it("will return a user and its details if the id is found", async () => {
    const validUserId = 1;
    var mockUser = {
      id: 1,
      firstName: "Kevin",
      lastName: "Chung",
    };
    var result = await getUserById(validUserId);
    expect(result).toEqual(mockUser);
  });

  it("will return an error if the id is not found", async () => {
    const invalidUserId = -4;
    await expect(getUserById(invalidUserId)).rejects.toEqual(
      "User with ID " + invalidUserId + " not found."
    );
  });
});
