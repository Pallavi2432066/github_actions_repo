const assert = require('assert');

function greet(name) {
  if (!name) throw new Error("Name is required");
  return `Hello, ${name}!`;
}

// ✅ Test case that passes
assert.strictEqual(greet("Pallavi"), "Hello, Pallavi!");

// ❌ Test case that fails
assert.strictEqual(greet(""), "Hello, Guest!");
