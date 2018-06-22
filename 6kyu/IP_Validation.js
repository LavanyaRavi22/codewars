function isValidIP(str) {
    var inValid = /\s/;
    var IP = str.split('.').filter(i => {
        if(Number(i) >=0 && Number(i) <=255 && !inValid.test(i))
        return true;
        return false;
    });
    return (IP.length === 4) ? true : false;
}