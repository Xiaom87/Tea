<?php
header('Access-Control-Allow-Origin:  *');
// print_r($_POST['items']);
 function format_message($items){
    $html = "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01 Transitional//EN' 'http://www.w3.org/TR/html4/loose.dtd'>
<html>
<head>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8' >
<title>Заказ</title>
</head>
<body>";


foreach($items as $item) {
    $html .= "Заказ: <div>" . $item['title'] . "</div>";
      $html .= "количество: <div>" . $item['count'] . "</div>";
        $html .= "цена: <div>" . $item['price'] . "</div>";
}

 $html .= "общая стоимость: <div>" . $_POST['total_price'] . "</div>";
$html .= "</body>
</html>";
     return $html;
 }
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "emailtest@YOURDOMAIN";
    $to = "dima.teplyakov.877@bk.ru";
    $subject = "PHP Mail Test script";
    $message = format_message($_POST['items']) ;
   // $headers = "From:" . $from;
    $headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    mail($to,$subject,$message,$headers);
    ?>