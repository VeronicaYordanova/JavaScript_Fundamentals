function escaping(input) {
    let raw = ["&", "<", ">", '"'];
    let escaped = ["&amp;", "&lt;", "&gt;", "&quot;"];

    let html = "<ul>\n";

    for(let line of input) {
        html += "  <li>";
        for(let i in raw) {
            line = line.split(raw[i]).join(escaped[i]);
        }
        html += line + "</li>\n";
    }

    html += "</ul>";

    console.log(html);
}
escaping(['<b>unescaped text</b>', 'normal text'])