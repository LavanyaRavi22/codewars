function toCamelCase(str){
    var split= str.split(/[^a-zA-Z]/);
    var newArr = split.map((item,index) => {
        return (index === 0) ? item : item.charAt(0).toUpperCase() + item.substr(1)
    });
    return newArr.join('');
}