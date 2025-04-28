function square(a) {
    return a*a;
}

function cube(a) {
    return a*a*a;
}

function quad(a) {
    return a*a*a*a;
}

function Sumoffun(a,b,fun) {
    let task = fun(a);
    let task2 = fun(b);
    return task + task2;
}

let abd = Sumoffun(4,6,quad);
console.log(abd);
