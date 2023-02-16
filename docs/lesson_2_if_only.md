# Lesson 2 - Conditionals

## Jargon: Statements and Expressions

First, just a quick recap of the bit of Jargon I introduced. I will often use these words in the coming lessons so it makes sense to define them properly so that we can understand what I mean when using them:

### Statements

You will hear me talk about the `let` statement or the `if` statement. A statement is a "command" if you will, that tells the JavaScript machine to do something specific.

```JavaScript
let age = 47; // computer, please create a variable named age and assign it the value of the thing on the right hand side of the equals sign.
```

### Expressions

Expressions are not statements in the sense that they usually don't work on their own. Instead they create a result that can be used in a statement.

```JavaScript
age = age + 1 // The part to the right of the equals sign is the expression. The whole line is a statement: computer, evaluate the expression on the right hand side of the equals sign and then assign that to the variable named age.
```

This example also shows something: You can use variables in expressions that you're assigning the result to. The assigning bit always happens at the very end, so for the sake of the expression, `age` has still the value it had before this line.

Expressions can get arbitrarily complex and we can, as in maths, make sure first things happen first by using parentheses to group expressions: `(a + b) * c`. If things get too complex to read, it is good practice to divide them up and use more variables to store the intermediate results.

## Conditionals

In JavaScript it looks like this:

```JavaScript

if (condition) {
  // if condition is met, execute this
} else {
  // if condition is not met, execute this
}
```

`condition` need to be an expression that results in either true or false. This is true for our comparison operators like `>, >=, <, <=, ==, ===, !=, !==` (We haven't looked at all of these).

We'll look at conditions in more detail in the next lesson. There is a lot of figure out.
