function countWordsInText([strArray]) {
    let text = {};

    let words = strArray.split(/[^A-Za-z0-9_]+/)
        .filter(w => w != '');

    for (let i = 0; i < words.length; i++) {
        if(!text.hasOwnProperty(words[i])){
            text[words[i]] = 0;
        }
        text[words[i]] += 1;
    }
    console.log(JSON.stringify(text));
}
countWordsInText(['Far too slow, you\'re far too slow.']);
countWordsInText(['JS devs use Node.js for server-side JS.-- JS for devs']);