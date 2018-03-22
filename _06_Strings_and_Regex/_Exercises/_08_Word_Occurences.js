function wordOccurrences(sentence, word) {
    let count = 0;
    let regex = new RegExp("\\b"+word+"\\b", "gi");
    let match = regex.exec(sentence);

    while(match) {
        count++;
        match = regex.exec(sentence);
    }
    console.log(count)
}
wordOccurrences('The waterfall was so high, that the child couldn’t see its peak.',
                'the');
wordOccurrences('How do you plan on achieving that? How? How can you even think of that?',
                'how');
wordOccurrences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.',
                'there');