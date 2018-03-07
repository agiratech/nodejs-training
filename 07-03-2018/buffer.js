const buf = Buffer.alloc(10, 'aishuasdfsaishu12345');
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.from("hello buffer", "ascii");
const buf3 = Buffer.alloc(10, 1);
const buf5 = Buffer.from([1, 2, 3]);
const buf6 = Buffer.allocUnsafe(10);
var a = Buffer.from(buf1)
buf1.write("Buffer really rocks!");
console.log(buf1);
console.log(buf1.toString());
console.log(buf2);
console.log(buf2.toString());
console.log(buf2.toString('hex'));
console.log(buf3);
console.log(buf);
console.log(buf.toString());
console.log(buf6);
console.log(buf5);
console.log(a);