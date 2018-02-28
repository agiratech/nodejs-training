//Write operations and append operations
fs.writeFile('message.txt', 'Hello Node.js', (err) => {
	if (err) 
		throw err;
	console.log('It\'s saved!');
})
// To check it's asynchronous nature !
console.log("This method is Asynchronous");


fs.writeFileSync('message.txt', 'This is content');
console.log('File Created and data saved');
// To check it's synchronous nature !
console.log("This method is synchronous");

var writeStream = fs.createWriteStream("JournalDEV.txt");
writeStream.write("Hi, JournalDEV Users. ");
writeStream.write("Thank You.");
writeStream.end();

//Append
var new_content = 'i am the new file content added at the end of the file'
fs.appendFile('message1.txt', new_content , (err) => {
	if(err) 
		throw err;
	console.log('The new_content was appended successfully');
});
console.log("This method is Asynchronous");

fs.appendFileSync('data.txt', new_content);