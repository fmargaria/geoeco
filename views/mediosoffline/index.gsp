<html>
<head>
    <meta charset="utf-8">
    <asset:stylesheet src="style.css"/>
</head>
<body>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>

  <!-- use the font -->
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      font-size: 12px;
    }
  </style>	

<script type="text/javascript"
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBnKVIDAnu-QRUOTnVKkEPxteRDuYmkbkk&libraries=geometry,places">
</script>
<div class="page-header">
  <center><h2>Buscar los medios de pago mas cercanos a una dirección <small></small></h2></center>
</div>
<asset:javascript src="script.js"/>
	<section class="webdesigntuts-workshop">
		<div id="init"></div>
	    <g:formRemote name="myForm" on404="alert('not found')" url="[controller:'Mediosoffline',action:'getAddress']" update="[success:'lat']">
		    <div class="center"><input name="address" type="text" placeholder="Dirección" />
		    <input name="limit" type="text" placeholder="Cantidad de Medios de Pago" />
			<g:select name="paymentMethod" from="${paymentMethods}" optionValue="name"
				value="${metodo}" optionKey="id"
				noSelection="['':'-Todos los metodos de pago-']" />		    
		    <input type="submit" value="Buscar"/></div>
		</g:formRemote>
	    <div id="lat"></div> 
	    <div id="lng"></div> 
  		<div id="map" style="padding:80px; height:500px"></div>
	    <div id="myTable">
	    </div>
    </section>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</body>

</html>
