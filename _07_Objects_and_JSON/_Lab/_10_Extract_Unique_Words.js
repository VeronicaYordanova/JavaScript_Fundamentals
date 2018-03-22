function extractUniqueWords(stringArray) {
    let setOfwords = new Set();

    for (let line of stringArray) {
      let words = line.split(/[^A-Za-z0-9]/).filter(w => w != '').map(w => w.trim());

        for (let word of words) {
            setOfwords.add(word.toLowerCase());
        }
    }
    console.log([...setOfwords.values()].join(", "));
}
extractUniqueWords(
    ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']);