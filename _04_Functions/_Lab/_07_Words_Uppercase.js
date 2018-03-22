function wordsUppercase(str) {
    let stringUpper = str.toUpperCase();
    let words = extractWords();
    words = words.filter(w => w != '');
    return words.join(', ');

    function extractWords() {
        return stringUpper.split(/\W+/);
    }
}
wordsUppercase('Hi, how are you?')