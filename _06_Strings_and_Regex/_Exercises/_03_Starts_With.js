function startsWith(str, substring) {
    if(str.startsWith(substring)){
        console.log(`true`);
    }
    else{
        console.log(`false`);
    }

}
startsWith('How have you been?', 'how');
startsWith('The quick brown fox...', 'The quick brown fox...');
startsWith('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta');