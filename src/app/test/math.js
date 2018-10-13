function add(x1,x2) {
    return x1+x2;
}

function substract(x1,x2){
    return x1-x2;
}

function multiply(x1,x2){
    return x1*x2;
}

function divide(x1,x2){
    if (x2==0) {
        console.log("no puedes divir por 0")
        //como no hago un return en consola da un undefined
    }else{
       return x1/x2;
    }
}
exports.add = add;