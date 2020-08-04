<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="../JavaScript/datos.js"></script>
    <link rel=alternate media=print href="m_plantillas.phps">
  </head>
  <body>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>

    <button type="button"  id="imprime" name="button">Imprimir</button>
    <button type="button"  id="imprime2" name="button">Imprimir</button>
<script>
    $(function(){
      $('#imprime').click(function(){
          imprimir();
      });
    });
</script>
<script>
    $(document).ready(function(){
      $('#imprime2').click(function(){
          window.frames["printf"].focus();
          window.frames["printf"].print();
      });
    });
</script>
<iframe id="printf" name="printf"src="http://localhost:8080/teenus/Prueba/Html/m_plantillas.php" width="0" height="0" style="display:none;"></iframe>

  </body>

</html>
