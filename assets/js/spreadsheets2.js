const sheetId = '1CrU1rW2Ngx9X-yn-U0VQd2luNl8XhPshY4liqgDp7C8';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName1 = 'BENO COMPANY';
const sheetName2 = 'Action and Follow up'; 
const query1 = encodeURIComponent('SELECT R WHERE N=37')
const query2 = encodeURIComponent('SELECT R WHERE N=36')
const query3 = encodeURIComponent('SELECT S WHERE N=37')
const query4 = encodeURIComponent('SELECT S WHERE N=36')
const query5 = encodeURIComponent('SELECT T WHERE N=36')
const query6 = encodeURIComponent('SELECT T WHERE N=36')
const url1 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query1}`
const url2 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query2}`
const url3 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query3}`
const url4 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query4}`
const url5 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName2}&tq=${query5}`
const url6 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query6}`
data1 = []
data2 = []
data3 = []
data4 = []
data5 = []
data6 = []
document.addEventListener('DOMContentLoaded', init)
output = document.querySelector('.output')

function init() {


    fetch(url1)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            jsonData = JSON.parse(rep.substring(47).slice(0, -2));

            console.log("jsonData1");
            console.log(jsonData);

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
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].f : '';
                })
                data1.push(row);

            })
            console.log("data1");
            console.log(data1);
            processRows1(data1);


        })

        fetch(url2)
        .then(res => res.text())
        .then(rep => {

            
            //Remove additional text and extract only JSON:
            jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            

            console.log("jsonData2");
            console.log(jsonData);


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
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].f : '';
                })
                data2.push(row);

            })
            console.log("data2");
            console.log(data2);
            processRows2(data2);

        })

        fetch(url3)
        .then(res => res.text())
        .then(rep => {


            //Remove additional text and extract only JSON:
            jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            

            console.log("jsonData3");
            console.log(jsonData);


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
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].f : '';
                })
                data3.push(row);

            })
            console.log("data3");
            console.log(data3);
            processRows3(data3);

        })
        

        fetch(url4)
        .then(res => res.text())
        .then(rep => {
            
            console.log("rep4");
            console.log(rep);
            
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
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].f : '';
                })
                data4.push(row);

            })
            console.log("data4");
            console.log(data4);
            processRows4(data4);

        })
        

        fetch(url5)
        .then(res => res.text())
        .then(rep => {

            
            //Remove additional text and extract only JSON:
            jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            console.log("jsonData5");
            console.log(jsonData);

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
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].f : '';
                })
                data5.push(row);

            })
            processRows5(data5);

        })


        fetch(url6)
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
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].f : '';
                })
                data6.push(row);

            })
            processRows6(data6);

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

function processRows3(json) {
    json.forEach((row) => {
        tr = document.createElement('tr');
        keys = Object.keys(row);

        keys.forEach((key) => {
            td = document.createElement('td');

            td.textContent = row[key];
            tr.appendChild(td);

            
        })
      
        document.getElementById("output3").innerHTML = tr.cells[0].innerText;
        console.log("sp3 tr");
        console.log(tr.cells[0].innerText);

    })
}

function processRows4(json) {
    json.forEach((row) => {
        tr = document.createElement('tr');
        keys = Object.keys(row);

        keys.forEach((key) => {
            td = document.createElement('td');

            td.textContent = row[key];
            tr.appendChild(td);

            
        })

        document.getElementById("output4").innerHTML = tr.cells[0].innerText;


    })
}


function processRows5(json) {
    json.forEach((row) => {
        tr = document.createElement('tr');
        keys = Object.keys(row);

        keys.forEach((key) => {
            td = document.createElement('td');

            td.textContent = row[key];
            tr.appendChild(td);

            
        })
      
        document.getElementById("output5").innerHTML = tr.cells[0].innerText;

    })
}

function processRows6(json) {
    json.forEach((row) => {
        tr = document.createElement('tr');
        keys = Object.keys(row);

        keys.forEach((key) => {
            td = document.createElement('td');

            td.textContent = row[key];
            tr.appendChild(td);

            
        })
        console.log("sp6 tr");
        console.log(tr.cells[0].innerText);
        document.getElementById("output6").innerHTML = tr.cells[0].innerText;

    })
}