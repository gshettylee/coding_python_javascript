/*
Validate the phone number if it finds a match return true else false

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

*/

function telephoneCheck(str) {
    let regex = /^1?\s?(\([\d+]{3}\)[- ]?|[\d+]{3}[- ]?)[0-9]{3}[- ]?[\d+]{4}$/
    val = regex.test(str)
    // To find the string match
    val1 = str.match(regex)
    console.log(val1)
    return val

}
 
 console.log(telephoneCheck("555-555-5555"))