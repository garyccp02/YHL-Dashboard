const sheetId = '1CrU1rW2Ngx9X-yn-U0VQd2luNl8XhPshY4liqgDp7C8';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName1 = 'BENO COMPANY';
const sheetName2 = 'Action and Follow up'; 
const query1 = encodeURIComponent('SELECT U WHERE N=37')
const query2 = encodeURIComponent('SELECT P WHERE C=37')
const url1 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query1}`
const url2 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName2}&tq=${query2}`
data = []
document.addEventListener('DOMContentLoaded', init)
output = document.querySelector('.output')

function init() {


    fetch(url1)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            jsonData = JSON.parse(rep.substring(47).slice(0, -2));

            colz = [];
            tr = document.createElement('tr');
            //Extract column labels
            jsonData.table.cols.forEach((heading) => {
                if (heading.label) {
                    let column = heading.label;
                    colz.push(column);
                    th = document.createElement('th');
                    th.innerText = column;
                    tr.appendChild(th);
                }
            })
            
            //extract row data:
            jsonData.table.rows.forEach((rowData) => {
                row = {};
                colz.forEach((ele, ind) => {
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
                })
                data.push(row);

            })
            processRows1(data);

        })

        fetch(url2)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            jsonData = JSON.parse(rep.substring(47).slice(0, -2));

            colz = [];
            tr = document.createElement('tr');
            //Extract column labels
            jsonData.table.cols.forEach((heading) => {
                if (heading.label) {
                    let column = heading.label;
                    colz.push(column);
                    th = document.createElement('th');
                    th.innerText = column;
                    tr.appendChild(th);
                }
            })
            
            //extract row data:
            jsonData.table.rows.forEach((rowData) => {
                row = {};
                colz.forEach((ele, ind) => {
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
                })
                data.push(row);

            })
            processRows2(data);

        })    
}
 
function processRows1(json) {
    json.forEach((row) => {
        tr = document.createElement('tr');
        keys = Object.keys(row);

        keys.forEach((key) => {
            td = document.createElement('td');

            td.textContent = row[key];
            tr.appendChild(td);

            
        })
        
        document.getElementById("output1").innerHTML = tr.cells[0].innerText;
        console.log("sp1 tr");
        console.log(tr.cells[0].innerText);


    })
    
}

function processRows2(json) {
    json.forEach((row) => {
        tr = document.createElement('tr');
        keys = Object.keys(row);

        keys.forEach((key) => {
            td = document.createElement('td');

            td.textContent = row[key];
            tr.appendChild(td);

            
        })
      
        document.getElementById("output2").innerHTML = tr.cells[0].innerText;
        console.log("sp2 tr");
        console.log(tr.cells[0].innerText);

    })
}