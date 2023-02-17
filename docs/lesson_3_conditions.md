# Lesson 3 - Compare ALL the things

## Comparing things beyond numbers

We've learned how to compare numbers with the smaller-than, larger-than operators:

| Operator       | Example  | Result  |
| -------------- | -------- | ------- |
| larger         | `3 > 1`  | `true`  |
|                | `1 > 3`  | `false` |
|                | `3 > 3`  | `false` |
| larger equals  | `3 >= 3` | `true`  |
| smaller        | `1 < 3`  | `true`  |
|                | `3 < 1`  | `false` |
|                | `3 < 3`  | `false` |
| smaller equals | `3 <= 3` | `true`  |

They work best with numbers. They do work with strings, though, so it might be a fun excercise to figure out how they work on those.

There are also the "equals" and "not equals" operators, and they have a little quirk in that there are two variations for each, one that automatically converts and one that doesn't:

| Operator      | Example         | Result  |
| ------------- | --------------- | ------- |
| Equals        | `12 == 12`      | `true`  |
|               | `12 == '12'`    | `true`  |
| Strict Equals | `12 === '12`    | `false` |
|               | `12 === 12`     | `true`  |
|               | `'12' === '12'` | `true`  |

## Boolean Operators

If you need to combine boolean results (or change them, you can use the boolean operators)

| Operator    | Code               | Result  |
| ----------- | ------------------ | ------- |
| Not (`!`)   | `!true`            | `false` |
|             | `!false`           | `true`  |
| Or (`\|\|`) | `true \|\| true`   | `true`  |
|             | `true \|\| false`  | `true`  |
|             | `false \|\| true`  | `true`  |
|             | `false \|\| false` | `false` |
| And (`&&`)  | `true && true`     | `true`  |
|             | `true && false`    | `false` |
|             | `false && true`    | `false` |
|             | `false && false`   | `false` |

Every side of `&&` and `||` can be a full expression (which could contain more ANDs and ORs even). Be careful with nesting them too deeply because that can become hard to read, especially since these all have their own precendence rules. For example are you able to guess what the outcome of the following expression is?

`(true || false) && (false || true) || (true && false) && false === true`

Yeah, me neither.
