import { handleSubmit } from "../src/client/js/formHandler";

describe("runs test to determine submit function exists", () => {
  test("should return true", () => {
    expect(handleSubmit).toBeDefined();
  });
});
