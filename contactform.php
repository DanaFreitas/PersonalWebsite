<?php

if (isset($_POST['submit'])){

$name = $_POST['formname'];
$subject = $_POST['subject'];
$mailFrom = $_POST['email'];
$message = $_POST['textarea'];

$mailTo = "drfreita@bhcc.edu";
$headers = "From: ".$mailFrom;
$txt = "You have recieved an email from ".$name.".\n\n".$message;

mail($mailTo, $subject, $txt, $headers);
header("Location: index.php?mailsend");
}
