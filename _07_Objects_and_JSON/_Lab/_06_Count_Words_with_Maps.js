function countWordsWithMaps([stringArray]) {
    let map = new Map();
    let splitText = stringArray.toLowerCase()
        .split(/[^A-Za-z0-9_]+/).filter(w => w != '');

    for (var i = 0; i < splitText.length; i++) {
        var obj = splitText[i];

        if(map.has(obj)){
            map.set(obj, map.get(obj) + 1);
        }
        else{
            map.set(obj, 1);
        }
    }

    let sortMap = Array.from(map.keys()).sort();

    for (let key of sortMap) {
        console.log(`'${key}' -> ${map.get(key)} times`)
    }

}
countWordsWithMaps(['Far too slow, you\'re far too slow.'])