function createTable(result) {
	console.log(result);
	result = result.split(",");
	var myTableDiv = document.getElementById("myTable");
    var table_r = document.getElementsByTagName("table")[0];
    if (table_r){
        myTableDiv.removeChild(table_r);
    }
    var table = document.createElement("TABLE");
    table.className = "table table-hover";
    var tableHead = document.createElement('THEAD');
    table.appendChild(tableHead);
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    var tr = document.createElement('TR');
    var th = document.createElement('TH');
    th.appendChild(document.createTextNode("Nombre del Metodo"));
    tr.appendChild(th);
    th = document.createElement('TH');
    th.appendChild(document.createTextNode("Cantidad"));
    tr.appendChild(th);
    tableHead.appendChild(tr);
    for (var i = 0; i < result.length; i++) {
        tr = document.createElement('TR');
        tableBody.appendChild(tr);
        for (var j = 0; j < 4; j++) {
            var td = document.createElement('TD');
            td.width = '75';
            if (j==0)td.appendChild(document.createTextNode(result[i].split(":")[0]));
            if (j==1)td.appendChild(document.createTextNode(result[i].split(":")[1]));
            tr.appendChild(td);
        }
    }
    myTableDiv.appendChild(table);
}
function get(result){
	createTable(result);
}