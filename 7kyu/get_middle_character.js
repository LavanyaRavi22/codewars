function getMiddle(s){
  //Code goes here!
  if(s.length %2 == 0)
    return s.charAt(s.length/2 - 1) + s.charAt(s.length/2);
  else
    return s.charAt(s.length/2);
}