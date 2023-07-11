const fs = require("fs");
let arrayToExport;

fs.readFile("backup.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;

    } else {

        const wordArray = data.split(/\r|\n/);
        const trimmedWordArray = [];

        wordArray.forEach((value, index) => {
            if (index > 3500) {
                return;
            } else {
                let thisWord = [];
                value.split("").map((value, index, array) => {
                    if (thisWord.includes(value)) {
                        thisWord = [];
                        return;
                    } else {
                        thisWord.push(value);
                        if (index === array.length - 1) {
                            trimmedWordArray.push(thisWord.join(""));
                            thisWord = [];
                        }
                    }
                });
            }
        })

        // No idea why certain letters are making their way in.. to be continued. 
        // Should ave enough for now to write to new file for Wordle.
        // Trimming nonsense results..
        arrayToExport = trimmedWordArray.filter(x => {
            return x.length === 5;
        })
        console.log(arrayToExport);
        const JSONarray = JSON.stringify(arrayToExport);
        fs.writeFile('test.txt', JSONarray, { flag: 'a+' }, err => {});
    }
});
