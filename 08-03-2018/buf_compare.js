const buf1 = Buffer.from('hi.txt');
const buf2 = Buffer.from('message.txt');
const buf3 = Buffer.from('ABCD');
console.log(buf1.compare(buf1));
console.log(buf1.compare(buf2));
console.log(buf1.compare(buf3));
console.log(buf2.compare(buf1));
console.log(buf2.compare(buf3));
const buf4 = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const buf5 = Buffer.from([5, 6, 7, 8, 9, 1, 2, 3, 4]);
console.log(buf4.compare(buf5, 5, 9, 0, 4));
console.log(buf4.compare(buf5, 0, 6, 4));
console.log(buf4.compare(buf5, 5, 6, 5));
console.log(buf4.length)
console.log(buf5[8])