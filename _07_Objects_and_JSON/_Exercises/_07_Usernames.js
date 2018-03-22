function usernames(stringArray) {
    let set = new Set();

    for (let element of stringArray) {
        set.add(element);
    }

    let elementInAscending = Array.from(set.keys()).sort((s1, s2) => sortElements(s1, s2));

    function sortElements(s1, s2) {
        if (s1.length != s2.length) {
            return s1.length - s2.length;
        }
        else{
            return s1.localeCompare(s2);
        }
    }

    for (let el of elementInAscending) {
        console.log(el);
    }
}
usernames([
'Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston'])