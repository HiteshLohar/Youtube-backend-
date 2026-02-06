const sum = (a , b, callback) => {
    console.log("sum = " + (a + b));
    console.log(callback.a)
}

const hello = () => {
    console.log("Hello...");
    let a=100;
}

sum(10,20, hello);