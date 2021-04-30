// Truncate the string to given num of charcaters and add "..." at the end of the new string
//
//First Git Hub commit


function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
