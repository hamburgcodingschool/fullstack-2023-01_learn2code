## Help Americans make sense of Europeans and vice versa

Try to adopt the unit/currency conversion that we've built but build a Farenheit<->Celsius converter

It should work as follows:

1. User inputs a number
2. Program calculates what that number would be in celsius if it would be farenheit
3. Program calculates what that number would be in farenheit if it would be celsius

Here's what that could look like in Replit:

```
Temperature> 20
20 Degrees Farenheit are -6.6666 Degrees Celsius
20 Degrees Celsius are 68 Degrees Farenheit
```

The Formula to get from F to C is as follows (tF = Temperature Farenheit, tC = Temperature Celsius) (Precendence rules are taken care of by parentheses)

```JavaScript
let tC = 5 / 9 * (tF - 32)
```

The reverse of that is (feel free to try to reverse it yourself first!)

```JavaScript
let tF = (tC * 9 / 5) + 32;
```

You can find similar code to what we did for the currency conversion in [../code/lesson_1/conversion.js].
