import { strict as assert } from "assert";
import { removeSuffix } from ".";

test("removeSuffix()", () => {
  assert.equal(removeSuffix("myfile.txt", ".txt"), "myfile");
  assert.throws(() => removeSuffix("myfile.txt", "abc"));
});
