let famousFive = ["Anne", "Dick", "George", "Ju", "Timmy"];

function longest(names) {
  let longestLength = 0;
  let longestName = "";
  for(let i=0;i<names.length, i++) {
    if (names[i].length > longestLength) {
      longestLength = names[i].length;
      longestName = names[i];
    }
  }
  return longestName;
}

console.log(longest(famousFive));
