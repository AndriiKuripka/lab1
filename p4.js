
exports.frequency=(arr,result )=>{
    for (let i = 0; i < arr.length; ++i)
    {
        let a = arr[i];
        if (result[a] != undefined)
        { ++result[a];}
        else
            result[a] = 1;
    }

    //console.log('task_4 ')
    let max=arr[0];
    for (let i=1;i<arr.length;++i) {
        if (max >= arr[i]) {
            max = arr[i];
        }
    }
    return('число '+ max + ' -' +result[max]+' раз/и/ів' )
}