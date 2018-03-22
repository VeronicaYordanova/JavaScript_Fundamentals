function jsonToHtmlTable(stringArray) {
    let html = '<table>\n';
    let table = JSON.parse(stringArray);
    let heading = Object.getOwnPropertyNames(table[0]); // printira kliuchovete

    html += "  <tr>";

    // vzimame samo heading
    for (let key of heading) {
        html += `<th>${htmlEscape(key)}</th>`
    }

    html += "</tr>\n";

    for (let row of table) {
        //console.log(row);
        html += '  <tr>';

        for (let element in row) {
            //console.log(row[element]); // - vzimame value-to na key-a
            html += `<td>${htmlEscape(row[element].toString())}</td>`;
        }
        html += '</tr>\n'

    }


    html += '</table>';

    console.log(html);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\\"&'<>]/g, ch => map[ch]);
    }

}
jsonToHtmlTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');
//jsonToHtmlTable(`[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},
//                    {"Name":"Gosho","Age":18,"City":"Plovdiv"},
//{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]`)