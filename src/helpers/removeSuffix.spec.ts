import { strict as assert } from "assert";
import { removeSuffix } from "./removeSuffix";
import { getNumber } from "../getNumber";

test("removeSuffix", () => {
  assert.equal(removeSuffix("myfile.txt", ".txt"), "myfile");
  assert.throws(() => removeSuffix("myfile.txt", "abc"));
});

test("getNumber", () => {
  assert.equal(getNumber(), 36);
});
