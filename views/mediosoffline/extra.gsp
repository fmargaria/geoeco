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

<div class="page-header">
  <center><h2>Buscar los medios de pago mas cercanos a una dirección <small></small></h2></center>
</div>
<asset:javascript src="script2.js"/>
	<section class="webdesigntuts-workshop">
		<div id="init"></div>
	    <g:formRemote name="myForm" on404="alert('not found')" url="[controller:'Mediosoffline',action:'extra2']" update="[success:'lat']">
		   <div class="line"><input name="address" type="text" placeholder="Dirección" />
            <input name="radius" type="text" placeholder="Radio (en metros)"/>
            <g:select name="paymentMethod" from="${paymentMethods}" optionValue="name"
                value="${metodo}" optionKey="id"
                noSelection="['':'-Todos los metodos de pago-']" />         
            <input type="submit" value="Buscar" onclick="document.getElementById('button').style.display = 'block';"/>
            <input id="button" type="button" style="display:none" onclick="document.getElementById('myTable').scrollIntoView({block: 'end', behavior: 'smooth'});" value="Ver Tabla"></button>
            </div>
		</g:formRemote>
	    <div id="lat"></div> 
	    <div id="lng"></div> 
	    <div id="myTable">
	    </div>
    </section>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</body>

</html>