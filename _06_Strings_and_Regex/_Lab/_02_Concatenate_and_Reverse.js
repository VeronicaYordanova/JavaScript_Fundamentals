function concatenateReversed(string) {
     let concatenatedString = string.join('');
     let chars = Array.from(concatenatedString);
     let reversedChars = chars.reverse();
     let reversedString = reversedChars.join('');

    console.log(reversedString);

}
concatenateReversed(['I', 'am', 'student']);
concatenateReversed(['race', 'car']);