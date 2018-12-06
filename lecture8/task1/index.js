const fs = require('fs');
const writeStream = fs.createWriteStream("./tmp.txt");
const input = process.openStdin();

input.on("data", (introduced) => {
    const str = introduced.toString();
    if (str.trim() === "exit") {
        process.exit(0);
    } else {
        writeStream.write(str, (err) => {
            if (err){
               throw err; 
            }
        })
    }
})
