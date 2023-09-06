const sheetId = '1CrU1rW2Ngx9X-yn-U0VQd2luNl8XhPshY4liqgDp7C8';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName1 = 'BENO COMPANY';
const sheetName2 = 'Action and Follow up'; 
const query1 = encodeURIComponent('SELECT R WHERE N=37')
const query2 = encodeURIComponent('SELECT R WHERE N=36')
const query3 = encodeURIComponent('SELECT S WHERE N=37')
const query4 = encodeURIComponent('SELECT S WHERE N=36')
const query5 = encodeURIComponent('SELECT T WHERE N=37')
const query6 = encodeURIComponent('SELECT T WHERE N=36')
const query7 = encodeURIComponent('SELECT Z WHERE N=37')
const query8 = encodeURIComponent('SELECT AA WHERE N=37')
const query9 = encodeURIComponent('SELECT AB WHERE N=37')
const query10 = encodeURIComponent('SELECT V WHERE N=37')
const query11 = encodeURIComponent('SELECT W WHERE N=37')
const query12 = encodeURIComponent('SELECT X WHERE N=37')
const url1 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query1}`
const url2 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query2}`
const url3 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query3}`
const url4 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query4}`
const url5 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query5}`
const url6 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query6}`
const url7 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query7}`
const url8 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query8}`
const url9 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query9}`
const url10 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query10}`
const url11 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query11}`
const url12 = `https://cors-anywhere.herokuapp.com/${base}&sheet=${sheetName1}&tq=${query12}`
data1 = []
data2 = []
data3 = []
data4 = []
data5 = []
data6 = []
data7 = []
data8 = []
data9 = []
data10 = []
data11 = []
data12 = []
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
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].f : '';
                })
                data1.push(row);

            })

            processRows1(data1);


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
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].f : '';
                })
                data2.push(row);

            })

            processRows2(data2);

        })

        fetch(url3)
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
                data3.push(row);

            })

            processRows3(data3);

        })
        

        fetch(url4)
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
                data4.push(row);

            })

            processRows4(data4);

        })
        

        fetch(url5)
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


        fetch(url7)
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
                data7.push(row);

            })
            processRows7(data7);

        })

        fetch(url8)
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
                data8.push(row);

            })
            processRows8(data8);

        })

        fetch(url9)
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
                data9.push(row);

            })
            processRows9(data9);

        })

        fetch(url10)
        .then(res => res.text())
        .then(rep => {

            
            console.log("resrep10");

            console.log(rep);

            //Remove additional text and extract only JSON:
            jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            

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
                data10.push(row);

            })
            processRows10(data10);

        })

        fetch(url11)
        .then(res => res.text())
        .then(rep => {


            console.log("resrep11");

            console.log(rep);

            //Remove additional text and extract only JSON:
            jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            

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
                data11.push(row);

            })
            processRows11(data11);

        })

        fetch(url12)
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
                data12.push(row);

            })
            processRows12(data12);

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

function processRows7(json) {
    json.forEach((row) => {
        tr = document.createElement('tr');
        keys = Object.keys(row);

        keys.forEach((key) => {
            td = document.createElement('td');

            td.textContent = row[key];
            tr.appendChild(td);

            
        })
        console.log("sp7 tr");
        console.log(tr.cells[0].innerText);
        document.getElementById("output7").innerHTML = tr.cells[0].innerText;

    })
}

function processRows8(json) {
    json.forEach((row) => {
        tr = document.createElement('tr');
        keys = Object.keys(row);

        keys.forEach((key) => {
            td = document.createElement('td');

            td.textContent = row[key];
            tr.appendChild(td);

            
        })
        console.log("sp8 tr");
        console.log(tr.cells[0].innerText);
        document.getElementById("output8").innerHTML = tr.cells[0].innerText;

    })
}

function processRows9(json) {
    json.forEach((row) => {
        tr = document.createElement('tr');
        keys = Object.keys(row);

        keys.forEach((key) => {
            td = document.createElement('td');

            td.textContent = row[key];
            tr.appendChild(td);

            
        })
        console.log("sp9 tr");
        console.log(tr.cells[0].innerText);
        document.getElementById("output9").innerHTML = tr.cells[0].innerText;

    })
}

function processRows10(json) {
    json.forEach((row) => {



        tr = document.createElement('tr');
        keys = Object.keys(row);

        keys.forEach((key) => {
            td = document.createElement('td');

            td.textContent = row[key];
            tr.appendChild(td);

            
        })
        console.log("sp10 tr");
        console.log(tr.cells[0].innerText);
        document.getElementById("output10").innerHTML = tr.cells[0].innerText;

    })
}

function processRows11(json) {
    json.forEach((row) => {
        tr = document.createElement('tr');
        keys = Object.keys(row);

        keys.forEach((key) => {
            td = document.createElement('td');

            td.textContent = row[key];
            tr.appendChild(td);

            
        })
        console.log("sp11 tr");
        console.log(tr.cells[0].innerText);
        document.getElementById("output11").innerHTML = tr.cells[0].innerText;

    })
}

function processRows12(json) {
    json.forEach((row) => {
        tr = document.createElement('tr');
        keys = Object.keys(row);

        keys.forEach((key) => {
            td = document.createElement('td');

            td.textContent = row[key];
            tr.appendChild(td);

            
        })
        console.log("sp12 tr");
        console.log(tr.cells[0].innerText);
        document.getElementById("output12").innerHTML = tr.cells[0].innerText;

    })
}