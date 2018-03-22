function composeTag(input) {
    let fileLocation = String(input[0]);
    let alternateText = String(input[1]);

    console.log(`<img src=\"${fileLocation}"\ alt=\"${alternateText}"\>` );
}
composeTag(['smiley.gif', 'Smiley Face']);