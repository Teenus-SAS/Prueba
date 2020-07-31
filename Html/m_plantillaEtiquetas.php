<!-- Modal para Imprmir Etiquetas -->

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Etiquetas Virtuales</title>

  <!-- Custom CSS -->
  <link href="Imprimirpdf.css" rel="stylesheet" media="all">
  <script src="../JavaScript/datos.js"></script>

</head>

<body>
  <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
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



  <!--<script>

    function print()
      {
      var doc = new jsPDF();
      doc.fromHTML($("#ContenedorP").html(),15,15)
        "width":170,
        "elementHandlers":specialElementHandlers

      doc.save("sample-file.pdf");
        }
      }

</script>-->



  <button type="button"  id="imprime" name="button">Imprimir</button>
  <script>
      $(function(){
        $('#imprime').click(function(){
            printDiv();
        });
      });
  </script>
</div>
  <button type="button" name="button" onclick="window.print()">Imprimir</button>

</body>

</html>
