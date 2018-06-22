function createPhoneNumber(numbers){
    if(numbers.length === 10) {
        var strings = numbers.join('');
        return '(' + strings.substr(0,3) + ') '+ strings.substr(3,3) + '-' + strings.substr(6);
    }
}