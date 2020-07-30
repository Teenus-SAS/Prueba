<!-- Modal para Imprmir Etiquetas -->

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Etiquetas Virtuales</title>

  <!-- Custom CSS -->
  <link href="Imprimirpdf.css" rel="stylesheet">
  <script src="../JavaScript/datos.js">

  </script>

</head>

<body>
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <div>
    <h4 class="modal-title"> <b> ETIQUETAS VIRTUALES</b></h4>
  </div>
  <div class="contenedorEtiquetas" id= "ContenedorP">
    <script>
        $(function(){
          cargar();
        });

    </script>
  </div>
  <!--
  <script>
  function printDiv()
  {
  var divToPrint=document.getElementById('ContenedorP');
  var newWin=window.open('','Print-Window');
  newWin.document.open();
  newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');
  newWin.document.close();
  setTimeout(function(){newWin.close();},10);
  }
</script>
-->
</script>
  <!--<button type="button" name="button" onclick="window.print()">Imprimir</button>-->
  <button type="button" name="button" onclick="window.print()">Imprimir</button>
</body>

</html>

<!-- </div> -->

      <!-- Modal footer -->
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div> -->
