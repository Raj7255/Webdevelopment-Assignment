function outerfun(para){

    let innervariable ="I am inner";

function innerfun(){
    console.log("outer parameter", para);
    console.log("Inner varible",innervariable);
}

return innerfun;
}

const result=outerfun("Hello, Lexical Scoping");

result();