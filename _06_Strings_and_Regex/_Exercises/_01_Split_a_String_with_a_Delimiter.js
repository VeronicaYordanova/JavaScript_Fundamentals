function splitWithDelimiter(string, delimiter) {
    let splittedElement = string.split(delimiter);

    for (let i = 0; i < splittedElement.length; i++) {
        console.log(splittedElement[i]);
    }

}
splitWithDelimiter('One-Two-Three-Four-Five', '-');