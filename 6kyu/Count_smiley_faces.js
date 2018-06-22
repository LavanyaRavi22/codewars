function countSmileys(arr) {
    return arr.reduce((sum, value, index, array) => {
        var smiley = value.split("");
        if(smiley[0] === ':' || smiley[0] === ';') {
            if(smiley[1] === '-' || smiley [1] === '~') {
                if(smiley[2] === ')' || smiley[2] === 'D') {
                return sum + 1;
                }
            } else if (smiley[1] === ')' || smiley[1] === 'D') {
                return sum + 1;
            }
        }
        return sum;
    }, 0);
}