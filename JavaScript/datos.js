var doc;
function cargar(){
  $.ajax({
    url:'../Php/datos.php',
     type: 'POST',
     success: function(res){
       var js= JSON.parse(res);
        var NoPedido;
        console.log(res);
        var etiquetas="<div class='margen1' id='margen'><div class='etiquetaVirtual'>"+
        "<label for=''>ORDEN PROD:</label><input type='text' id='Orden' class='form-control' value='"+js[0].OrdenProducto+"'>"+
         "<label for=''>PESO:</label> <input type='text' id='peso' class='form-control'value='"+js[0].Peso+"'>"+
         " <label for=''>REFERENCIA:</label><input type='text' id='Referencia' class='form-control'value='"+js[0].referencia+"'>"+
         "<label for=''>Fecha:</label><input type='text' id='fecha' class='form-control'value='"+js[0].OrdenProducto+"'>"+
         "<label for=''>DISPENSO:</label><input type='text' id='dispenso' class='form-control'value='"+js[0].dispenso+"'>"+
         "<Label>VoBo QC:</Label><input type='text' id='aprobacion' class='form-control'value='"+js[0].VoBo+"'></div></div>";

          for (var i = 1; i < js.length; i++) {
            if(i%6==0){
              etiquetas+="<div class='pagebreak'> <div class='margen ' id='margen'><div class='etiquetaVirtual '>"+
          "<label for=''>ORDEN PROD:</label><input type='text' id='Orden"+i+"' class='form-control'value='"+js[i].OrdenProducto+"'>"+
           "<label for=''>PESO:</label> <input type='text' id='peso"+i+"' class='form-control'value='"+js[i].Peso+"'>"+
           " <label for=''>REFERENCIA:</label><input type='text' id='Referencia"+i+"' class='form-control'value='"+js[i].referencia+"'>"+
           "<label for=''>Fecha:</label><input type='text' id='fecha"+i+"' class='form-control'value='"+js[i].OrdenProducto+"'>"+
           "<label for=''>DISPENSO:</label><input type='text' id='dispenso"+i+"' class='form-control'value='"+js[i].dispenso+"'>"+
           "<Label>VoBo QC:</Label><input type='text' id='aprobacion"+i+"' class='form-control'value='"+js[i].VoBo+"'></div></div></div>"
         }
         else{
           etiquetas+="<div class='margen ' id='margen'><div class='etiquetaVirtual '>"+
       "<label for=''>ORDEN PROD:</label><input type='text' id='Orden"+i+"' class='form-control'value='"+js[i].OrdenProducto+"'>"+
        "<label for=''>PESO:</label> <input type='text' id='peso"+i+"' class='form-control'value='"+js[i].Peso+"'>"+
        " <label for=''>REFERENCIA:</label><input type='text' id='Referencia"+i+"' class='form-control'value='"+js[i].referencia+"'>"+
        "<label for=''>Fecha:</label><input type='text' id='fecha"+i+"' class='form-control'value='"+js[i].OrdenProducto+"'>"+
        "<label for=''>DISPENSO:</label><input type='text' id='dispenso"+i+"' class='form-control'value='"+js[i].dispenso+"'>"+
        "<Label>VoBo QC:</Label><input type='text' id='aprobacion"+i+"' class='form-control'value='"+js[i].VoBo+"'></div></div>"
         }
         }
          $('#ContenedorP').html(etiquetas);
          //var divToPrint=document.getElementById('ContenedorP');
          //var newWin=window.open('','Print-Window');
          //newWin.document.open();
          //newWin.document.write('<html><body onload="window.print()"><link href="Imprimirpdf.css" rel="stylesheet" media="all">'+divToPrint.innerHTML+'</body></html>');
          //newWin.document.close();
          //setTimeout(function(){newWin.close();},30);
     }
  })
}
function imprimir(){
  var newWin=window.open('','Print-Window');
  newWin.document.open();
  newWin.document.write("<!DOCTYPE html> <html lang='es'> <head> <meta charset='UTF-8'><meta name='viewport'"+
  " content='width=device-width, initial-scale=1.0'><title>Etiquetas Virtuales</title>"+
  "<link href='Imprimirpdf.css' rel='stylesheet' media='all'><script src='../JavaScript/datos.js'></script></head>"+
  "<body><script type='text/javascript' src='https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.1/dist/html2canvas.min.js'></script>"+
  "<script src='https://code.jquery.com/jquery-3.4.1.slim.min.js' integrity='sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n' crossorigin='anonymous'></script>"+
  "<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js'></script>"+
  "<script src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js'></script><div>"+
  "<h4 class='modal-title'> <b> ETIQUETAS VIRTUALES</b></h4></div>"+
  "<div class='contenedorEtiquetas' id= 'ContenedorP'><script>$(function(){cargar();});</script></div>"+
  "</body></html>");
  newWin.document.close();
  setTimeout(function(){newWin.close();},30);

}
