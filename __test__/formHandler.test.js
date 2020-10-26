import { handleSubmit, updateHTML } from "../src/client/js/formHandler";

describe("runs test to determine submit function exists", () => {
  test("should return true", () => {
    expect(handleSubmit).toBeDefined();
  });
});
describe("Mock the function", () => {
  test("mock the handleSubmit function", () => {
    let handleSubmitFunctionCall = (evt) => evt.preventDefault();
    let mockFn = jest.fn(handleSubmitFunctionCall);
    expect(mockFn).toHaveBeenCalledTimes(0);
  });
});

describe("outer function returns inner function to update UI", () => {
  test("should return true and defined", () => {
    const innerFunction = jest.fn(updateHTML);
    expect(innerFunction).toBeTruthy();
    expect(innerFunction).toBeDefined();
  });
  //   test("updateHTML returns data", () => {
  //     return updateHTML().then((d) => {
  //       expect(d).toBe("Retrieved");
  //     });
  //   });
});
