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

describe("no protocol attached", () => {
  test("returns true", () => {
    const inputNoProto = "www.facebook.com";
    expect(checkTheUrl(inputNoProto)).toBe(true);
  });
  test("returns true", () => {
    const inputNoProto = "github.com";
    expect(checkTheUrl(inputNoProto)).toBe(true);
  });
  test("should return false, invalid url", () => {
    const input = "twitter  . com ";
    expect(checkTheUrl(input)).toBe(false);
  });
});

// console.log("test", checkTheUrl);
