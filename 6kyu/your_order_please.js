function order(words){
  // ...
    if(words) {
    var newArr = [];
        words.split(' ').map(item => {
        for(i=1;i<=9;i++) {
            var regex = RegExp(i);
            if(regex.test(item))
            newArr[i-1] = item;
        }
        });
        return newArr.join(' ');
    } else {
        return "";
    }
}