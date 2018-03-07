
const buf1 = Buffer.alloc(10);


const buf2 = Buffer.alloc(10, 1);


const buf3 = Buffer.allocUnsafe(10);


const buf4 = Buffer.from([1, 2, 3]);


const buf5 = Buffer.from('tést');


const buf6 = Buffer.from('tést', 'latin1');

console.log(buf1.toString('hex'));
console.log(buf2.toString('hex'));
console.log(buf3.toString('hex'));
console.log(buf4.toString('hex'));
console.log(buf5.toString('hex'));
console.log(buf6.toString('hex'));
