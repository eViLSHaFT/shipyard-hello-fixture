import { describe, it } from "node:test";
import { strictEqual } from "node:assert";
import { reverse } from "../lib/reverse.js";

describe("reverse", () => {
  it("reverses a simple string", () => {
    strictEqual(reverse("hello"), "olleh");
  });

  it("reverses a single character", () => {
    strictEqual(reverse("a"), "a");
  });

  it("returns empty string for empty input", () => {
    strictEqual(reverse(""), "");
  });

  it("reverses a string with spaces", () => {
    strictEqual(reverse("hello world"), "dlrow olleh");
  });

  it("reverses a string with special characters", () => {
    strictEqual(reverse("a!b@c#"), "#c@b!a");
  });

  it("reverses a palindrome", () => {
    strictEqual(reverse("racecar"), "racecar");
  });
});
