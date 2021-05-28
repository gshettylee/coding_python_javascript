function convertToRoman(num) {
    let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let symb = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    var i = 0
    var roman = ""
    if (num > 3999){
      return num
    } 
    else{
      while (num>0){
        let div = Math.floor (num /val[i])
        num = num % val[i]
        while (div){
           roman += symb[i]
           div = div -1
        }
        i+=1
      }
      return roman; 
    }
  }
  
  romnum = convertToRoman(36);
  console.log(romnum)