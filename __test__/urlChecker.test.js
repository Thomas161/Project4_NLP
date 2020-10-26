import { checkTheUrl } from "../src/client/js/urlChecker";

describe("Check function defined and that its truthy", () => {
  test("function is defined ", () => {
    expect(checkTheUrl).toBeDefined();
  });
  test("function to be truthy", () => {
    expect(checkTheUrl).toBeTruthy();
  });
});

describe("url protocol is attached", () => {
  test("returns true for unsecured protocol ", () => {
    const inputHttp = "http://www.facebook.com";
    expect(checkTheUrl(inputHttp)).toBe(true);
  });
  test("returns true for secure protocol", () => {
    const inputHttps = "https://github.com";
    expect(checkTheUrl(inputHttps)).toBe(true);
  });
});

// console.log("test", checkTheUrl);
