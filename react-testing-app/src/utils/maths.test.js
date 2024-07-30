import { add } from "./maths";

test("should return value 10 given input of 4 and 6", () => {
  const result = add(4, 6);

  expect(result).toEqual(10);
});

test.skip("should fail when throw an error", () => {
  throw new Error("Something went wrong");
});
