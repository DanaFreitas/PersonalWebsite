<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;




//composer's autoloader
require 'vendor/autoload.php';

try{

$mail = new PHPMailer(true);
$mail->SMTPDebug = 2;                                       
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username='danarobertfreitas@gmail.com';
$mail->Password='pnzoqzwvzrrmcpyi
';
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

$mail->addAddress('danarobertfreitas@gmail.com', 'Dana Freitas');
$mail->setFrom($_POST['email'], $_POST['name']);

$mail->isHTML(true);
$mail->Subject = $_POST['subject'];
$mail->Body = $_POST['message'];


$mail->send();
echo "Sending Successful";

}

catch(Exception $e) {
echo "It failed.{$mail->ErrorInfo}";}

?> 