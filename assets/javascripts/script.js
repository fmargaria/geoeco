function initialize(address,limit,paymentMethod,radius) {
        geocoder = new google.maps.Geocoder();
        var lt = ""
        var ln = ""
        document.getElementById('init').scrollIntoView();
        geocoder.geocode({
        'address': address
        }, function(results, status) {      
            lt = results[0].geometry.location.lat();
            ln = results[0].geometry.location.lng();
            var response2;
            var url = "";
            var ra = ""
            if (radius!=""){
            	li = ""
            	ra="," + radius
        	}else{
        		li = "&limit=" + limit
        		ra=""
        	}
        	if (paymentMethod == ""){
                url="https://api.mercadolibre.com/sites/MLA/payment_methods/agencies/search?near_to="+lt+",%20" + ln+ ra + li
            	}else if (paymentMethod == "off"){
            		var methodQ = "rapipago,pagofacil,maestro,debcabal,redlink,bapropagos,account_money,consumer_credits";
                    url="https://api.mercadolibre.com/sites/MLA/payment_methods/agencies/search?payment_method="+methodQ +"&near_to="+lt+",%20" + ln +"&limit=" + limit

            	}else{
                url="https://api.mercadolibre.com/sites/MLA/payment_methods/"+paymentMethod+"/agencies?near_to="+lt+",%20" + ln +"&limit=" + limit
            }
        	console.log(url);
            $.ajax({
            	url: url,
                dataType:'json',
                async: false,
                type: 'get',
                success:function(response){
                      createTable(response);
                      response2=response;
                },
                error:function(response){
          		  alert("No hay resultados - Intente otra busqueda");
                }
                
            });
            var uluru = {lat: lt, lng: ln};
            var map = new google.maps.Map(document.getElementById('map'), {
                center: uluru,
                scrollwheel: false,
                zoom: 13
              });
            for (i = 0; i < response2.results.length; i++){
            	myLatLng = {lat: parseFloat(response2.results[i].address.location.split(",")[0]), lng: parseFloat(response2.results[i].address.location.split(",")[1])};
            	var marker;
        	     marker = new google.maps.Marker({
        		    position: myLatLng,
        		    map: map,
        		    title: 'Hello World!'
        		  });
            }
            });
        
    }
function createTable(response) {
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
    th.appendChild(document.createTextNode("Nombre"));
    tr.appendChild(th);
    th = document.createElement('TH');
    th.appendChild(document.createTextNode("Direccion"));
    tr.appendChild(th);
    th = document.createElement('TH');
    th.appendChild(document.createTextNode("Ciudad"));
    tr.appendChild(th);
    th = document.createElement('TH');
    th.appendChild(document.createTextNode("Pais"));
    tr.appendChild(th);
    tableHead.appendChild(tr);
    for (var i = 0; i < response.results.length; i++) {
        tr = document.createElement('TR');
        tableBody.appendChild(tr);
        for (var j = 0; j < 4; j++) {
            var td = document.createElement('TD');
            td.width = '75';
            if (j==0)td.appendChild(document.createTextNode(response.results[i].description));
            if (j==1)td.appendChild(document.createTextNode(response.results[i].address.address_line));
            if (j==2)td.appendChild(document.createTextNode(response.results[i].address.city));
            if (j==3)td.appendChild(document.createTextNode(response.results[i].address.country));
            tr.appendChild(td);
        }
    }
    myTableDiv.appendChild(table);
}
function get(address,limit, paymentMethod, radius){
	google.maps.event.addDomListener(window, 'load', initialize(address,limit,paymentMethod, radius));
}
