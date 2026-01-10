// TODO: Binary Triangle Alternate start

/**
 *   1
 *   0 1
 *   0 1 0
 *   1 0 1 0
 *   1 0 1 0 1
 *
 */

let n = 5;
let toggle = 0;
for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < i + 1; j++) {
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
    row = row + " " + toggle;
  }

  console.log(row);
}
