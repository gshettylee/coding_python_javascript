/*Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
*/

function mutation(arr) {
  let test = arr[1].toLowerCase().split('');
  //console.log(test)
  let target = arr[0].toLowerCase().split('');
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) {
      return false;
    }
   }
  return true
}

console.log(mutation(["hello", "Hell"]));