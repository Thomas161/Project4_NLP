export function checkTheUrl(input) {
  console.log("Checking URL input", input);

  const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

  return pattern.test(input);
}
