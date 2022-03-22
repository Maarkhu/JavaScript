function a() {
    b();
    console.log('Called b!');
}

function b() {
    console.log('Called a!');
}
a();
console.log('Called c!');

var a = 'Hello World!';

console.log(a);
console.log('Do you see this Execution Stack?')