> const buf1 = Buffer.alloc(10);
undefined
> console.log(buf1)
<Buffer 00 00 00 00 00 00 00 00 00 00>
undefined
>  buf = Buffer(10);
<Buffer 00 00 00 00 00 00 00 00 00 00>
> var buf = Buffer(10);
undefined
> console.log(buf);
<Buffer 00 00 00 00 00 00 00 00 00 00>
undefined
> var buf = Buffer(10,1);
undefined
> console.log(buf);
<Buffer 00 00 00 00 00 00 00 00 00 00>
undefined
> const buf2 = Buffer.alloc(10, 1);
undefined
> console.log(buf2);
<Buffer 01 01 01 01 01 01 01 01 01 01>
undefined
> var buf = Buffer.alloc(10,1);
undefined
> console.log(buf);
<Buffer 01 01 01 01 01 01 01 01 01 01>
undefined
> var buf = Buffer.allocUnsafe(10);
undefined
> console.log(buf);
<Buffer 48 a2 25 53 ce 7f 00 00 b0 af>
undefined
> console.log( buf.byteLength );
10
undefined
> var len = buf.byteLength
undefined
> console.log(len);
10
undefined
> var buf = "rajesh"
undefined
> console.log(len);
10
undefined
> var len = buf.byteLength
undefined
> console.log(len);
undefined
undefined
> var buf = new Buffer("rajesh")
undefined
> console.log(len);
undefined
undefined
> console.log(len);
undefined
undefined
> var len = buf.byteLength
undefined
> console.log(len);
6
undefined
> var buf = Buffer.from('tést');
undefined
> console.log(buf);
<Buffer 74 c3 a9 73 74>
undefined
> var buf = Buffer.from(['tést','rajesh']);
undefined
> console.log(buf);
<Buffer 00 00>
undefined
> var buf = Buffer(['tést','rajesh']);
undefined
> console.log(buf);
<Buffer 00 00>
undefined
> var buf = Buffer.from('tést', 'latin1');
undefined
> console.log(buf);
<Buffer 74 e9 73 74>
undefined
> var buf = Buffer.from('rajesh', 'latin1');
undefined
> console.log(buf);
<Buffer 72 61 6a 65 73 68>
undefined
//buffer array
const arr = new Uint16Array(2);
undefined
> arr[0] = 5000;
5000
> arr[1] = 4000;
4000
> var buf1 = Buffer.from(arr);
SyntaxError: Identifier 'buf1' has already been declared
> var buf = Buffer.from(arr);
undefined
> buf2 = Buffer.from(arr.buffer);
TypeError: Assignment to constant variable.
> buf2 = Buffer.from(arr.buffer);
TypeError: Assignment to constant variable.
> var buf2 = Buffer.from(arr.buffer);
SyntaxError: Identifier 'buf2' has already been declared
> var buff = Buffer.from(arr.buffer);
undefined
> buf
<Buffer 88 a0>
> buff
<Buffer 88 13 a0 0f>
> arr
Uint16Array [ 5000, 4000 ]
> buff.write('aa')
2
> buff.byteLength
4
> buf.byteLength
2
> buf.toString('utf-8')
'��'
> buf.toString('utf-8');
'��'
> buf
<Buffer 88 a0>
> buff
<Buffer 61 61 a0 0f>
> arr
Uint16Array [ 24929, 4000 ]
> arr[1]
4000
> arr[0]
24929


var arr = new Uint16Array(20);
undefined
> arr
Uint16Array [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
> var buf = Buffer.from(arr.buffer, 0, 16);
undefined
> arr
Uint16Array [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
> buf
<Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
> buf.length
16
