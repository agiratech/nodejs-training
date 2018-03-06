const buf1 = Buffer.alloc(10);

const buf2 = Buffer.from("hello buffer");

buf1.toJSON()
// { type: 'Buffer', data: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] }
// an empty buffer
console.log(buf1.write("Buffer really rocks!") )
console.log(buf1);
