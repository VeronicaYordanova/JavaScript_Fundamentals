function jsonTable(stringArray) {
    let html = '<table>'

    for (let line of stringArray) {
        let tokens = JSON.parse(line);

        html += `
  <tr>
    <td>${htmlEscape(tokens.name)}</td>
    <td>${htmlEscape(tokens.position)}</td>
    <td>${Number(tokens.salary)}</td>
  <tr>`;

    }

    html += '\n</table>'

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\\"&'<>]/g, ch => map[ch]);
    }

    console.log(html);
}
jsonTable(
['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
);
