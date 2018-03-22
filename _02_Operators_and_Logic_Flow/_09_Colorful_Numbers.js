function colorfulNumbers(n) {
    let html = '<ul>\n';
    let color = '';

    for (let i = 1; i <= n; i++) {
        if(i % 2 == 0){
            color = 'blue';

        }
        else if(i % 2 == 1){
            color = 'green';

        }
        html += `  <li><span style='color: ${color}'>${i}</span></li>\n`;
    }
    html += '</ul>';
    console.log(html);


}
colorfulNumbers(10)