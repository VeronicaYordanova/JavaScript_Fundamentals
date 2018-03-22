function capitalizeTheWords(text) {
    console.log(text.toLowerCase().split(" ").map(w => w[0].toUpperCase() + w.substr(1)).join(' '));

}
capitalizeTheWords('Capitalize these words');
capitalizeTheWords('Was that Easy? tRY thIs onE for SiZe!')