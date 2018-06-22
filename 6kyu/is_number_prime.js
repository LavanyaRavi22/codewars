function isPrime(num) {
    //TODO
    var count = 0;
    for(i=0;i<num;i++) {
      if (num % i === 0)
        count++;
    }
    return (count === 1) ? true : false;
}