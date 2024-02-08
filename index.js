// function findMissingLetter(letters) {
//   const alphabet = ' abcdefghijklmnopqrstuvwxyz';
//   const alphabetUpper = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//   for (let i = 0; i < letters.length; i++) {
//     if (alphabet.indexOf(letters[i + 1]) - alphabet.indexOf(letters[i]) > 1) {
//       return alphabet[alphabet.indexOf(letters[i]) + 1];
//     }

//     if (alphabetUpper.indexOf(letters[i + 1]) - alphabetUpper.indexOf(letters[i]) > 1) {
//       return alphabetUpper[alphabetUpper.indexOf(letters[i]) + 1];
//     }
//   }
// }

// console.log(findMissingLetter(['b', 'c', 'd', 'f']));// e
// console.log(findMissingLetter(['O', 'Q', 'R', 'S']));// P

function removeDuplicateNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 2 * arr[i];
  }

  return arr
}

// console.log(removeDuplicateNum('race car'));agi
// console.log(removeDuplicateNum('asasfaaas'));
console.log(removeDuplicateNum([1, 2, 3, 4, 5]));
