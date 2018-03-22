function templateFormat(input) {
    function questionText(question) {
        let html = "\t<question>\n";
        html += `\t\t${question}\n`;
        html += "\t</question>\n";

        return html;
    }

    function answerText(answer) {
        let html = "\t<answer>\n";
        html += `\t\t${answer}\n`;
        html += "\t</answer>\n";

        return html;
    }

    let html = '<?xml version="1.0" encoding="UTF-8"?>\n';
    html += '<quiz>\n';

    for (let i = 0; i < input.length; i++) {
        if(i % 2 == 0){
            html += questionText(input[i]);
        } else {
            html += answerText(input[i]);
        }
    }
    html += '</quiz>\n';

    console.log(html);


}
templateFormat(["Who was the forty-second president of the U.S.A.?",
                "William Jefferson Clinton"]);