import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { intersect, literal, object, parse, pipe, readonly } from 'valibot';

describe('intersect', () => {
  it('should parse a frozen object matching two readonly object schemas', () => {
    const schema = intersect([
      pipe(
        object({
          one: literal(1)
        }),
        readonly()
      ),
      pipe(
        object({
          two: literal(2)
        }),
        readonly()
      )
    ]);

    assert.deepStrictEqual(parse(schema, Object.freeze({ one: 1, two: 2 })), { one: 1, two: 2 });
  });
});
