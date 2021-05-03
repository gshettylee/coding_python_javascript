/*
Write a function that splits an array (first argument) into groups the length
 of size (second argument) and returns them as a two-dimensional array.

 chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
*/

function chunkArrayInGroups(arr, size) {
    let arr2= []
    for (let i=0 ; i< arr.length; i+=size){
      let arr1 = arr.slice(i,i+size)
      arr2.push(arr1)
    }
    return arr2;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));