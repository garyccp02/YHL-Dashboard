/* const sheetId2 = '1CrU1rW2Ngx9X-yn-U0VQd2luNl8XhPshY4liqgDp7C8';
const base2 = `https://docs.google.com/spreadsheets/d/${sheetId2}/gviz/tq?`;
const sheetName2 = 'Action and Follow up';
const query2 = encodeURIComponent('SELECT I WHERE C=37')
const url2 = `https://cors-anywhere.herokuapp.com/${base2}&sheet=${sheetName2}&tq=${query2}`
const data2 = []
document.addEventListener('DOMContentLoaded', init)
const output2 = document.querySelector('.output2')

function init() {
    fetch(url2)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            console.log(rep)
            const colz = [];
            const tr = document.createElement('tr');
            //Extract column labels
            jsonData.table.cols.forEach((heading) => {
                if (heading.label) {
                    let column = heading.label;
                    colz.push(column);
                    const th = document.createElement('th');
                    th.innerText = column;
                    tr.appendChild(th);
                }
            })
            
            //extract row data:
            jsonData.table.rows.forEach((rowData) => {
                const row = {};
                colz.forEach((ele, ind) => {
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
                })
                data.push(row);
            })
            processRows(data);
            console.log(data)

            document.getElementById("output1").innerHTML = tr.cells[0].innerText;
            console.log("output1 tr");
            console.log(tr.cells[0].innerText);

            document.getElementById("output2").innerHTML = tr.cells[1].innerText;
            console.log("output2 tr");
            console.log(tr.cells[1].innerText);
        })
}
 
function processRows(json) {
    json.forEach((row) => {
        const tr = document.createElement('tr');
        const keys = Object.keys(row);
    
        keys.forEach((key) => {
            const td = document.createElement('td');
            td.textContent = row[key];
            tr.appendChild(td);
            console.log(td)
            
        })

    })
}
*/