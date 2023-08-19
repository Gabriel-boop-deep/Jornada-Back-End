const fsPromises = require("fs/promises");


(
    async function () {
        const loveText = await fsPromises.readFile('love.txt');

        console.log(loveText.toString());
    }
)()