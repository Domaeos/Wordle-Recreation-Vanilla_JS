const fs = require("fs");

fs.readFile("word_list.txt", "utf8", (err, data) => {
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
                let duplicates = [];
                // for each char in the current word
                for (const char of value) {
                    // this returns out of the wordArray.forEach, so we skip to the next word
                    if (duplicates.includes(char)) return;
                    duplicates.push(char)
                }

                trimmedWordArray.push(value);
            }
        })
        
        const JSONarray = JSON.stringify(trimmedWordArray);
        fs.writeFile('test.txt', JSONarray, { flag: 'a+' }, err => {});
    }
});
