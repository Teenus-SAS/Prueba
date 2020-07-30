<?php
    $conexion = mysqli_connect("localhost","root","","pedidos" );
    $select= mysqli_query($conexion,"select * from pedido");
      while($aaa=mysqli_fetch_assoc($select)){
        $arr[]=$aaa;
  }
echo json_encode($arr);
 ?>
