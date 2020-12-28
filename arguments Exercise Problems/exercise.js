// const sum = function(...args){
//     let summed = 0;
//     for(let i = 0; i < args.length; i++){
//        summed += args[i];
//     }
//     return summed;
// }

// Function.prototype.myBind = function(ctx){
//     const fn = this;
//     const bindArgs = Array.from(arguments)

//     return function(){
//         const callArgs = Array.from(arguments)
//         return fn.apply(ctx, bindArgs.slice(1).concat(callArgs))
//     }
// }

// Function.prototype.myBind = function(ctx, ...bindArgs){
//     const fn = this;

//     return function(...callArgs){
//         return fn.apply(ctx, bindArgs.concat(callArgs))
//     }
// }

const curriedSum = function(numArgs){
    const numbers = [];

        return function _curriedAdd(num){
            numbers.push(num);
                if (numbers.length === numArgs) {
                    return console.log(numbers.reduce((acc, el) => acc + el));
                } else {
                    return _curriedAdd;
                }
        };
}

// Function.prototype.curry = function(numArgs){
//     const that = this;
//     const args = [];

//     return function _func(arg){
//         args.push(arg);
//             if (args.length === numArgs){
//                 return that(...args);
//             } else {
//                 return _func;
//             }
//     }
// }

Function.prototype.curry = function (numArgs) {
    const that = this;
    const args = [];

    return function _func(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return that.apply(null, args);
        } else {
            return _func;
        }
    }
}
    
