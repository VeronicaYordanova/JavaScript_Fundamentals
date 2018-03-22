function findVariableNamesInSentences(input) {
    let text = [];
    let regex = /\b_([a-zA-Z0-9]+)\b/g;
    let match = regex.exec(input);

    while(match){
        text.push(match[1]);
        match = regex.exec(input);
    }
    console.log(text.join(','));
}
findVariableNamesInSentences('The _id and _age variables are both integers.');
findVariableNamesInSentences('Calculate the _area of the _perfectRectangle object.');
findVariableNamesInSentences('__invalidVariable _evenMoreInvalidVariable_ _validVariable');