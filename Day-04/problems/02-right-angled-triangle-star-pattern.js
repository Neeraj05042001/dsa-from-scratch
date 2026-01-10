// TODO:

/**
 *   *
 *   * *
 *   * * *
 *   * * * *
 *   * * * * *
 *
 */

let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < i + 1; j++) {
    // Just added a extra space " " to make the pattern look good.
    row = row + " " + "*";
  }
  console.log(row);
}
