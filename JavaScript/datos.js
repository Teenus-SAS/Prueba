function cargar(){
  $.ajax({
    url:'../Php/datos.php',
     type: 'POST',
     success: function(res){
       var js= JSON.parse(res);
        var NoPedido;
        console.log(res);
        var etiquetas="<div class='margen' id='margen'><div class='etiquetaVirtual'>"+
        "<label for=''>ORDEN PROD:</label><input type='text' id='Orden' class='form-control' value='"+js[0].OrdenProducto+"'>"+
         "<label for=''>PESO:</label> <input type='text' id='peso' class='form-control'value='"+js[0].Peso+"'>"+
         " <label for=''>REFERENCIA:</label><input type='text' id='Referencia' class='form-control'value='"+js[0].referencia+"'>"+
         "<label for=''>Fecha:</label><input type='text' id='fecha' class='form-control'value='"+js[0].OrdenProducto+"'>"+
         "<label for=''>DISPENSO:</label><input type='text' id='dispenso' class='form-control'value='"+js[0].dispenso+"'>"+
         "<Label>VoBo QC:</Label><input type='text' id='aprobacion' class='form-control'value='"+js[0].VoBo+"'></div></div>";

          for (var i = 1; i < js.length; i++) {
          etiquetas+="<div class='margen' id='margen'><div class='etiquetaVirtual'>"+
          "<label for=''>ORDEN PROD:</label><input type='text' id='Orden"+i+"' class='form-control'value='"+js[i].OrdenProducto+"'>"+
           "<label for=''>PESO:</label> <input type='text' id='peso"+i+"' class='form-control'value='"+js[i].Peso+"'>"+
           " <label for=''>REFERENCIA:</label><input type='text' id='Referencia"+i+"' class='form-control'value='"+js[i].referencia+"'>"+
           "<label for=''>Fecha:</label><input type='text' id='fecha"+i+"' class='form-control'value='"+js[i].OrdenProducto+"'>"+
           "<label for=''>DISPENSO:</label><input type='text' id='dispenso"+i+"' class='form-control'value='"+js[i].dispenso+"'>"+
           "<Label>VoBo QC:</Label><input type='text' id='aprobacion"+i+"' class='form-control'value='"+js[i].VoBo+"'></div></div>"
         }
          $('#ContenedorP').html(etiquetas);
     }
  })
}

function printDiv()
{
    var divToPrint=document.getElementById('ContenedorP');
    var newWin=window.open('','Print-Window');
    newWin.document.open();
    newWin.document.write('<html><body onload="window.print()">'+'<head><link href="Imprimirpdf.css" rel="stylesheet" media="all"></head>'+divToPrint.innerHTML+'</body></html>');
    newWin.document.close();
    setTimeout(function(){newWin.close();},10);

}
