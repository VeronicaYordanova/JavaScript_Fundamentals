function scoreToHtml(jsonString) {
    let html = '<table>\n';
    let scores = JSON.parse(jsonString);
    html += '   <tr><th>name</th><th>score</th></tr>\n';

    for (let score of scores) {
        console.log(score);
        html += '   <tr>';
        html += `<td>${htmlEscape(score.name)}</td>`;
        html += `<td>${Number(score.score)}</td>`;
        html += '</tr>\n';
    }
    html+= '</table>';
    console.log(html);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\\"&'<>]/g, ch => map[ch]);
    }
}
scoreToHtml('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');