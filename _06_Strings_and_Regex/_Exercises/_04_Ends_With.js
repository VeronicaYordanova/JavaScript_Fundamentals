function endsWith(str, substring) {
    if(str.endsWith(substring)){
        console.log(`true`);
    }
    else{
        console.log(`false`);
    }
}
endsWith('This sentence ends with fun?', 'fun?');
endsWith('This is Houston, we have...', 'We have...');
endsWith('The new iPhone has no headphones jack.', 'o headphones jack.');