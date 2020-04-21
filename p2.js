function insertStringInString(a,b,position) {
    return [a.slice(0, position), b, a.slice(position)].join('');
    }
str=insertStringInString('kuripka','neloh',15)
console.log(str)
