<?php
error_reporting(-1);
ini_set('display_errors','On');
set_error_handler("var_dump");
$name = $_POST['FullName'];
$number = $_POST['Number'];
$email = $_POST['Email'];
$message = $_POST['Message'];
$formcontent = "From: $name \n Message: $message";
$recipient = "gfontan1@my.hpu.edu";
$subject = "Contact Form";
mail($recipient, $subject, $formcontent);
echo "Success!";
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Sent</title>
  </head>
  <body>
    <h3 style="text-align: center">Your message has been sent. </h3>
      <input type="button" name="button"><a href="home.html">Home</a></input>
  </body>
</html>