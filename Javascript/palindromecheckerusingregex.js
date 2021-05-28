function palindrome(str) {
    str = str.toLowerCase().trim()
    str = str.replace(/[-&\/\\#,_ +()$~%.'":*?<>{}]/g, '');
    console.log(str)
    newstr = ""
    for (let i=0; i<str.length; i++){
        newstr = str[i] + newstr

    }
    if (newstr === str){
        return true
    }
    return false    
  }
  
  
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"));