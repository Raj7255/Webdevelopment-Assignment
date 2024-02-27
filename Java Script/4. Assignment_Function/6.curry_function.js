function curry(func){
    return func()

}
const add= curry(function curried(x){
    return function curriedfun(y){
        return x+y
    }
})
const add1= add(5)
const add2=add1(6)
console.log(add2);
console.log(add(5)(10));



























