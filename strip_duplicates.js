const fs = require("fs");

fs.readFile("word_list.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;

    } else {

        const wordArray = data.split(/\r|\n/);
        const trimmedWordArray = [];

        wordArray.forEach(value => {
            let thisWord = [];
            value.split("").some((value, index, array) => {
                if (thisWord.includes(value)) {
                    thisWord = [];
                    return true;
                } else {
                    thisWord.push(value);
                    if (index === array.length - 1) {
                        trimmedWordArray.push(thisWord.join(""));
                        thisWord = [];
                    }
                }
            });
        })
        console.log(trimmedWordArray);
        const JSONarray = JSON.stringify(trimmedWordArray);
        fs.writeFile('stripped_wordlist.txt', JSONarray, { flag: 'a+' }, err => { });
    }
}); 
