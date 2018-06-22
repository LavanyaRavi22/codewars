function rot13(message){
  //your code here
  return message.split('').map((c) => {
    let ascii = c.charCodeAt();
    if(ascii >=65 && ascii <=90) {
      let newAscii = ascii + 13;
      if(newAscii > 90) {
       return String.fromCharCode(newAscii - 90 + 64);
      }
      return String.fromCharCode(newAscii);
    }
    else if(ascii >=97 && ascii <=122) {
      let newAscii = ascii + 13;
      if(newAscii > 122) {
       return String.fromCharCode(newAscii - 122 + 96);
      }
      return String.fromCharCode(newAscii);
    }
    return String.fromCharCode(ascii);
  }).join('');
}