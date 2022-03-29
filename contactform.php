<?php

if (isset($_POST['submit'])){

$name = $_POST['formname'];
$subject = $_POST['subject'];
$mailFrom = $_POST['mail'];
$message = $_POST['textarea'];

$mailTo = "drfreita@bhcc.edu";
$headers = "From: ".$mailFrom;
$txt = "You have recieved an email from ".$name.".\n\n".$message;

mail($mailTo, $subject, $txt, $headers);
<<<<<<< HEAD
header("Location: index.html?mailsend");
}

?>
=======
header("Location: index.php?mailsend");
}
>>>>>>> 269b3f46a734d9cef47877eb7d286a0ccf7fec21
