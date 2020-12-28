const sum = function(...args){
    let summed = 0;
    for(let i = 0; i < args.length; i++ ){
       summed += args[i];
    }
    return summed;
}

Function.prototype.myBind